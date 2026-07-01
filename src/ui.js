export function showHome() {

  acode.select(
    "JavaX",
    [
      "☕ New Java Project",
      "⚙ New Gradle Project",
      "📦 New Maven Project",
      "📂 Open Existing Project",
      "⚙ Settings"
    ],
    function(index){

      alert("Selected index = " + index);

    }

  );

}
