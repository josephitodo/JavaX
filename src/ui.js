import { showProjectWizard } from "./projectWizard";

export function showHome() {

  const items = [
    "☕ New Java Project",
    "⚙ New Gradle Project",
    "📦 New Maven Project",
    "📂 Open Existing Project",
    "⚙ Settings"
  ];

  acode.select(
    "JavaX",
    items,
    (index) => {

      switch(index){

        case 0:
          showProjectWizard("java");
          break;

        case 1:
          showProjectWizard("gradle");
          break;

        case 2:
          showProjectWizard("maven");
          break;

      }

    }
  );

}
