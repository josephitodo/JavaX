export async function showHome() {

    const result = await acode.select(
        "JavaX",
        [
            "☕ New Java Project",
            "⚙ New Gradle Project",
            "📦 New Maven Project",
            "📂 Open Existing Project",
            "⚙ Settings"
        ]
    );

    alert(JSON.stringify(result));

}
