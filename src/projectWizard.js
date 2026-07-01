import { createJavaProject } from "./projectGenerator";

export async function showProjectWizard(type) {

    const projectName = prompt("Project Name");

    if (!projectName) return;

    const packageName = prompt(
        "Package Name",
        "com.example"
    );

    if (!packageName) return;

    const javaVersion = await acode.select(
        "Java Version",
        [
            "Java 8",
            "Java 11",
            "Java 17",
            "Java 21"
        ]
    );

    if (!javaVersion) return;

    await createJavaProject(
        "/storage/emulated/0",
        projectName,
        packageName,
        javaVersion,
        type
    );
}
