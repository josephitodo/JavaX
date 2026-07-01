export async function createJavaProject(rootPath, projectName, packageName) {

    const fs = acode.require("fs");

    const root = fs(`${rootPath}/${projectName}`);

    // create project root
    if (!(await root.exists())) {
        await root.createDirectory(projectName);
    }

    const project = fs(`${rootPath}/${projectName}`);

    await project.createDirectory("src");
    await project.createFile(
    "README.md",
    `# ${projectName}`
); // temporary test

    acode.alert(
        "JavaX",
        `Project ${projectName} generated successfully.`
    );
}
