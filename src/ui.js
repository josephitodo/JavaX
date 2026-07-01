import { showProjectWizard } from "./projectWizard";

export async function showHome() {

    const action = await acode.select(
        "JavaX",
        [
            "☕ New Java Project",
            "⚙ New Gradle Project",
            "📦 New Maven Project",
            "📂 Open Existing Project",
            "⚙ Settings"
        ]
    );

    switch(action){

        case "☕ New Java Project":
            showProjectWizard("java");
            break;

        case "⚙ New Gradle Project":
            showProjectWizard("gradle");
            break;

        case "📦 New Maven Project":
            showProjectWizard("maven");
            break;

        case "📂 Open Existing Project":
            alert("Coming Soon");
            break;

        case "⚙ Settings":
            alert("Coming Soon");
            break;
    }

}
