export function showProjectWizard(type){

    const projectName = prompt("Project Name");

    if(!projectName) return;

    const packageName = prompt(
        "Package Name",
        "com.example"
    );

    alert(
`Creating ${type} project...

Name:
${projectName}

Package:
${packageName}`
    );

}
