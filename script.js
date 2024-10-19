let tasks = [];

function addTask() {
    const task = prompt("أدخل المهمة:");
    tasks.push({ task, completed: false });
    alert("تمت إضافة المهمة بنجاح!");
}

function viewTasks() {
    if (tasks.length === 0) {
        alert("لا توجد مهام حالياً.");
        return;
    }

    let taskList = "المهام:\n";
    tasks.forEach((task, index) => {
        const status = task.completed ? "[مكتملة]" : "[غير مكتملة]";
        taskList += `${index + 1}. ${task.task} ${status}\n`;
    });
    alert(taskList);
}

function editTask() {
    viewTasks();
    const taskIndex = parseInt(prompt("أدخل رقم المهمة التي ترغب في تعديلها:")) - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        const newTask = prompt("أدخل المهمة الجديدة:");
        tasks[taskIndex].task = newTask;
        alert("تم تعديل المهمة بنجاح!");
    } else {
        alert("رقم المهمة غير صالح.");
    }
}

function deleteTask() {
    viewTasks();
    const taskIndex = parseInt(prompt("أدخل رقم المهمة التي ترغب في حذفها:")) - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks.splice(taskIndex, 1);
        alert("تم حذف المهمة بنجاح!");
    } else {
        alert("رقم المهمة غير صالح.");
    }
}

function toggleTaskCompletion() {
    viewTasks();
    const taskIndex = parseInt(prompt("أدخل رقم المهمة التي ترغب في تبديل حالتها:")) - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        alert("تم تبديل حالة المهمة بنجاح!");
    } else {
        alert("رقم المهمة غير صالح.");
    }
}

function todoApp() {
    let exit = false;
    while (!exit) {
        const choice = prompt(
            "اختر خياراً:\n" +
            "1. إضافة مهمة\n" +
            "2. عرض المهام\n" +
            "3. تعديل مهمة\n" +
            "4. حذف مهمة\n" +
            "5. تبديل حالة المهمة (مكتملة/غير مكتملة)\n" +
            "6. خروج"
        );
        
        switch (choice) {
            case '1':
                addTask();
                break;
            case '2':
                viewTasks();
                break;
            case '3':
                editTask();
                break;
            case '4':
                deleteTask();
                break;
            case '5':
                toggleTaskCompletion();
                break;
            case '6':
                exit = true;
                alert("تم إنهاء التطبيق.");
                break;
            default:
                alert("خيار غير صالح. حاول مجدداً.");
        }
    }
}

todoApp();
