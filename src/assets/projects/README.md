# Project photos

One folder per project, named to match the project's markdown file:

    src/assets/projects/<project-slug>/cover.jpg
    src/assets/projects/<project-slug>/01.jpg, 02.jpg ...

Reference them from the project's frontmatter with relative paths
(see src/content/projects/_TEMPLATE.md). Astro optimises them at build time,
so drop in the full-size originals (ideally 2400px on the long edge, JPG).
