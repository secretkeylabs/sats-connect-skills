/**
 * Reads all sats-connect-* /SKILL.md files, extracts YAML frontmatter,
 * and writes the `contributes.skills` array into package.json.
 *
 * Usage: bun scripts/generate-skills.ts
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { join } from "path";

const root = join(import.meta.dirname, "..");

interface Skill {
  id: string;
  name: string;
  description: string;
  file: string;
}

function parseFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const result: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    // Strip surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    result[key] = value;
  }
  return result;
}

const skillsDir = join(root, "skills");

const dirs = readdirSync(skillsDir)
  .filter((d) => d.startsWith("sats-connect-"))
  .filter((d) => statSync(join(skillsDir, d)).isDirectory())
  .sort();

const skills: Skill[] = [];

for (const dir of dirs) {
  const skillPath = join(skillsDir, dir, "SKILL.md");
  try {
    const content = readFileSync(skillPath, "utf-8");
    const fm = parseFrontmatter(content);
    if (!fm.name || !fm.description) {
      console.warn(
        `⚠ Skipping ${dir}: missing name or description in frontmatter`,
      );
      continue;
    }
    skills.push({
      id: `sats-connect.${dir.replace("sats-connect-", "")}`,
      name: fm.name,
      description: fm.description,
      file: `./skills/${dir}/SKILL.md`,
    });
  } catch {
    console.warn(`⚠ Skipping ${dir}: no SKILL.md found`);
  }
}

// Update package.json
const pkgPath = join(root, "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
pkg.contributes = pkg.contributes ?? {};
pkg.contributes.skills = skills;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log(`✓ Wrote ${skills.length} skills to package.json`);
