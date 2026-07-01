const index = await acode.select(
    "JavaX",
    [
        "☕ New Java Project",
        "⚙ New Gradle Project",
        "📦 New Maven Project",
        "📂 Open Existing Project",
        "⚙ Settings"
    ]
);

alert(index);
