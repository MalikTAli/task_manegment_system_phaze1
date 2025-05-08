document.addEventListener("DOMContentLoaded", function () {
  const logInBtn = document.getElementById("loginbtn");
  const signUpBtn = document.getElementById("signupbtn");
  const pagesDiv = document.getElementById("pages");

  const singInForm = `
  <div class="formdev">
    <h2>Sign In</h2>
    <form id="loginForm" class="form">

         <label>Username:</label>
         <input id="loginEmail" type="email" placeholder="Enter your email" required />

         <label>Password:</label>
         <input id="loginPassword" type="password" placeholder="enter password" required />
      <label>
         <input type="checkbox" />
          Stay Singed In 
      </label>
         <button id="loginsubmit" class="loginsubmit" type="submit">Sign In</button>
    </form>
    <p id="loginMessage"></p>
  </div> `;

  const signUpForm = `
    <div class="formdev">
        <h2>Sign Up</h2>
        <form id="signupForm" class="form">

            <label>Username:</label>
            <input id="signupEmail" type="email" required />

            <label>Password:</label>
            <input id="signupPassword" type="password"  required />
            <label>
            <input id="isStudent" type="checkbox" />
                I am a student 
            </label>
            <div id="universityIdField" style="display: none; flex-direction: column;">
                <label> university id</label>
                <input type="text" id="universityId" />
            </div>
            <button id="loginsubmit" class="loginsubmit" type="submit">Sign Up</button>
        </form>
  </div>
  `;
  const page1 = `
  <div class="page1">
        <header>
          <h1>Welcome to Tasks Management System</h1>
        </header>
        <div class="buttons">
          <button id="loginbtn">login</button>
          <button id="signupbtn">sign up</button>
        </div>
      </div>
  `;
  const homepage = `
    <div id="adminpage" class="adminpage">
        <header id="header" class="header">
          <span id="adminName" class="adminName"><span id="admin_name">malik </span></span>
          <button id="logout-btn" class="logout-btn">logout</button>
        </header>
        <div id="main-container" class="main-container">
          <nav id="main-navbar" class="main-navbar">
            <ul>
              <li>
                <button id="home-btn" class="nav-btn">Home</button>
              </li>
              <li>
                <button id="projects-btn" class="nav-btn">Projects</button>
              </li>
              <li>
                <button id="tasks-btn" class="nav-btn">Tasks</button>
              </li>
              <li>
                <button id="chat-btn" class="nav-btn">Chat</button>
              </li>
            </ul>
          </nav>

          <main id="mainContent" class="main-content">
          </main>
        </div>
      </div>
  `;

  const HomeOverView = `
    <div id="adminOverView" class="adminOverView">
              <div class="overview-head">
                <h1>Welcome to the Task Management System</h1>
                <h3 id="currentTime">time</h3>
              </div>
              <div class="overview-statistics-container">
                <div id="projectCard" class="card">
                  <h1>Number of Projects</h1>
                  <h3 id="number-project">20</h3>
                </div>
                <div id="studentCard" class="card">
                  <h1>Number of Students</h1>
                  <h3 id="number-student">50</h3>
                </div>
                <div id="taskCard" class="card">
                  <h1>Number of Tasks</h1>
                  <h3 id="number-task">60</h3>
                </div>
                <div id="finishedCard" class="card">
                  <h1>Number of Finished Projects</h1>
                  <h3 id="number-finished-project">3</h3>
                </div>
              </div>
              <div class="title">Admin dashbord over view</div>
              <div class="overview-statistics-chart">
                <canvas id="myChart" class="myChart"></canvas>
              </div>
            </div>
  `;

  const Projects = `
<div id="projectsOverView" class="projectsOverView">
              <div id="projects-head" class="projects-head">
                <h1>Projects Overview</h1>
                <div id="projects-bar" class="projects-bar">
                  <button id="addNewProject">Add New Project</button>
                  <input
                    id="searchproject"
                    type="text"
                    placeholder="Search projetcs by title or description"
                  />
                  <select id="status-filter">
                    <option value="all statuses">All Statuses</option>
                    <option value="in progress">In Progress</option>
                    <option value="finished">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="on hold">On Hold</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
              <div
                id="projects-cards-container"
                class="projects-cards-container"
              >
                <div class="project-card">
                  <h1 id="project-name" class="project-name">name</h1>
                  <p>
                    <b>Description:</b
                    ><span id="description-text"> this is the description</span>
                  </p>
                  <p>
                    <b>Students:</b>
                    <span id="students-list"> Student1,Student2</span>
                  </p>
                  <p>
                    <b>Category:</b>
                    <span id="category-text"> Web development</span>
                  </p>
                  <p id="currentProgress" class="currentProgress">100%</p>
                  <div class="dates">
                    <span id="start-date">2025-1-10</span>
                    <span id="end-date">2025-2-20</span>
                  </div>
                </div>
              </div>
              <div id="addProjectPage" class="addProjectPage">
                <div id="addprojecthead" class="addprojecthead">
                  <h1>Add New Project</h1>
                  <span id="closePopupBtn">✖</span>
                </div>
                <form class="addprojectform">
                  <label
                    >Project Title:<br />
                    <input
                      type="text"
                      id="projectTittle"
                      name="projectTittle"
                    />
                  </label>

                  <label
                    >Project Description:<br />
                    <textarea
                      id="project-description"
                      class="project-description"
                      name="project-description"
                    ></textarea>
                  </label>

                  <label
                    >Student List:<br />
                    <select id="studentsList" name="students" multiple>
                      <option value="ahmad@gmail.com">ahmad@gmail.com</option>
                      <option value="sameh@gmail.com">sameh@gmail.com</option>
                      // <option value="student3">Student 3</option>
                      // <option value="student4">Student 4</option>
                      // <option value="student5">Student 5</option>
                    </select>
                  </label>

                  <label
                    >Project Category:<br />
                    <select id="categorysList" name="categorys">
                      <option value="AI">AI</option>
                      <option value="Web development">Web development</option>
                      <option value="Mobile application">
                        Mobile application
                      </option>
                      <option value="Data science">Data science</option>
                      <option value="Networking">Networking</option>
                    </select>
                  </label>

                  <label
                    >Starting Date:<br />
                    <input type="date" id="start-date" name="start-date" />
                  </label>

                  <label
                    >Ending Date:<br />
                    <input type="date" id="end-date" name="end-date" />
                  </label>

                  <label
                    >Project Status:<br />
                    <select id="statusList" name="status">
                      <option value="all statuses">All Statuses</option>
                      <option value="in progress">In Progress</option>
                      <option value="finished">Completed</option>
                      <option value="pending">Pending</option>
                      <option value="on hold">On Hold</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </label>

                  <button id="addproject-btn" type="submit">Add Project</button>
                </form>
              </div>
            </div>
            <div id="detailsContainer" class="detailsContainer">
              <h1 id="project-name" class="tittle">project name</h1>
              <p>
                <b>Description:</b
                ><span id="description-text"> this is the description</span>
              </p>
              <p>
                <b>Category:</b
                ><span id="Category-text"> this is the description</span>
              </p>
              <p>
                <b>Students:</b>
                <span id="students-list"> Student1,Student2</span>
              </p>
              <p>
                <b>Start Date:</b>
                <span id="start-date"> 2025-1-15</span>
              </p>
              <p>
                <b>End Date:</b>
                <span id="end-date">2025-2-20</span>
              </p>
              <h1 class="tittle">Tasks</h1>
              <div id="tasks-container" class="tasks-container">
                <div class="task-card">
                  <p><b>TaskID:</b><span id="description-text"> 5</span></p>
                  <p>
                    <b>Task Name:</b
                    ><span id="Category-text"> taskk name </span>
                  </p>
                  <p>
                    <b>Description:</b>
                    <span id="students-list"> this is the descripiton</span>
                  </p>
                  <p>
                    <b>Assigned Student:</b>
                    <span id="start-date"> malik</span>
                  </p>
                  <p>
                    <b>Status:</b>
                    <span id="end-date">finished</span>
                  </p>
                </div>
              </div>
            </div>
  `;

  // const AddNewProjectPopup = `
  //   <div id="addProjectPage" class="addProjectPage">
  //             <div id="addprojecthead" class="addprojecthead">
  //               <h1>Add New Project</h1>
  //               <span id="closePopupBtn">✖</span>
  //             </div>
  //             <form class="addprojectform">
  //               <label
  //                 >Project Tittle<br />
  //                 <input type="text" id="projectTittle" />
  //               </label>
  //               <label
  //                 >Project Description<br />
  //                 <textarea
  //                   id="project-description"
  //                   class="project-description"
  //                 ></textarea>
  //               </label>
  //               <label>
  //                 Student List: <br />
  //                 <select id="studentsList" name="students" multiple>
  //                   <option value="student1">Student 1</option>
  //                   <option value="student2">Student 2</option>
  //                   <option value="student3">Student 3</option>
  //                   <option value="student4">Student 4</option>
  //                   <option value="student5">Student 5</option>
  //                 </select>
  //               </label>

  //               <label>
  //                 Project Category: <br />
  //                 <select id="categorysList" name="categorys">
  //                   <option value="AI">AI</option>
  //                   <option value="Web development">Web development</option>
  //                   <option value="Mobile application">
  //                     Mobile application
  //                   </option>
  //                   <option value="Date sceince">Date sceince</option>
  //                   <option value="Networking">Networking</option>
  //                 </select>
  //               </label>
  //               <label for="start-date"
  //                 >Starting Date:<br />
  //                 <input type="date" id="start-date" name="start-date" />
  //               </label>
  //               <label for="end-date"
  //                 >Ending Date:<br />
  //                 <input type="date" id="end-date" name="end-date" />
  //               </label>
  //               <label>
  //                 Project Status: <br />
  //                 <select id="statusList" name="status">
  //                   <option value="all statuses">All Statuses</option>
  //                   <option value="in progress">In Progress</option>
  //                   <option value="finished">Completed</option>
  //                   <option value="pending">Pending</option>
  //                   <option value="on hold">On Hold</option>
  //                   <option value="cancelled">Cancelled</option>
  //                 </select>
  //               </label>
  //               <button id="addproject-btn">Add Project</button>
  //             </form>
  //           </div>
  // `;
  const addTaslPage = `
              <div id="createTaskPopupe" class="createTaskPopupe">
              <div id="createTaskHead" class="createTaskHead">
                <h1>Create New Task</h1>
                <span id="closeCreateTaskPopupe">✖</span>
              </div>
              <form class="addTaskForm">
                <label
                  >Project Tittle:<br />
                  <select id="projectOfTask" class="projectOfTask">
                    <option value="project1">project1</option>
                    <option value="project2">project2</option>
                    <option value="project3">project3</option>
                  </select>
                </label>
                <label>
                  Task Name:<br />
                  <input type="text" />
                </label>
                <label>
                  Description<br />
                  <textarea
                    id="task-description"
                    class="task-description"
                  ></textarea>
                </label>
                <label
                  >Assigend Student:<br />
                  <select id="studentOfTask" class="studentOfTask">
                    <option value="student1">student1</option>
                    <option value="student2">student2</option>
                    <option value="student3">student3</option>
                  </select>
                </label>
                <label>
                  Project Status: <br />
                  <select id="taskList" name="taskstatus">
                    <option value="in progress">In Progress</option>
                    <option value="finished">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="on hold">On Hold</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </label>
                <button id="addtask-btn">Add Task</button>
              </form>
            </div>
  `;
  const Tasks = `
    <div id="tasksPage" class="tasksPage">
        <div id="tasksPageHead" class="tasksPageHead">
          <label class="sortBylabel">
            Sorted by:
            <select id="taskSortedBy" class="taskSortedBy">
              <option value="taskStatus">Task Satatus</option>
              <option value="project">Project</option>
              <option value="dueDate">Due Date</option>
              <option value="assigendStudents">Assigend Students</option>
            </select>
          </label>
          <button id="openCareatTaskPopupe-btn">Create A New Task</button>
        </div>
        <table id="tasksTable" class="tasksTable">
          <thead>
            <tr>
              <th>TaskID</th>
              <th>ProjectName</th>
              <th>TaskName</th>
              <th>Description</th>
              <th>AssignedStudent</th>
              <th>Status</th>
              <th>DueDate</th>
            </tr>
          </thead>
          <tbody id="tasksTableBody">
            
          </tbody>
        </table>
          <div id="createTaskPopupe" class="createTaskPopupe">
              <div id="createTaskHead" class="createTaskHead">
                <h1>Create New Task</h1>
                <span id="closeCreateTaskPopupe">✖</span>
              </div>
              <form class="addTaskForm">
                <label
                  >Project Tittle:<br />
                  <select id="projectOfTask" class="projectOfTask">
                  
                  </select>
                </label>
                <label>
                  Task Name:<br />
                  <input type="text" />
                </label>
                <label>
                  Description<br />
                  <textarea
                    id="task-description"
                    class="task-description"
                  ></textarea>
                </label>
                <label
                  >Assigend Student:<br />
                  <select id="studentOfTask" class="studentOfTask">
                 
                  </select>
                </label>
                <label>
                  Project Status: <br />
                  <select id="taskList" name="taskstatus">
                    <option value="in progress">In Progress</option>
                    <option value="finished">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="on hold">On Hold</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </label>
                 <label
                    >Due Date:<br />
                    <input type="date" id="Due-date" name="Due-date" />
                  </label>
                <button id="addtask-btn">Add Task</button>
              </form>
        </div>
     </div>
  `;

  const Chat = `
                <div class="chatpage" id="chatPage">
              <div class="listBox" id="listBox">
                <h2>List of Students</h2>
                <div id="stu-list" class="stu-list">
                  <span>malik ali</span>
                  <span>tariq ali</span>
                  <span>sameh ali</span>
                </div>
              </div>
              <div id="chatBox" class="chatBox">
                <div class="chatbox-head">
                  chatting with <span id="chatwithName">...</span>
                </div>
                <div class="chatBoxBody" id="chatBoxBody">
                  <div class="massege">salam alykom</div>
                  <div class="massege">salam alykom</div>
                  <div class="massege">salam alykom</div>
                </div>
                <div class="chatBoxFooter">
                  <input id="inputmessage" type="text" placeholder="type your message" />
                  <button id="sendm">Send</button>
                </div>
              </div>
            </div> 
  `;

  if (logInBtn) {
    logInBtn.addEventListener("click", function () {
      pagesDiv.innerHTML = singInForm;
      handleSignIn();
    });
  }

  if (signUpBtn) {
    signUpBtn.addEventListener("click", function () {
      pagesDiv.innerHTML = signUpForm;
      handleSignUp();
    });
  }

  function handleSignIn() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const message = document.getElementById("loginMessage");

      let users = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        message.style.color = "green";
        message.innerText = "Login successful! Redirecting...";
        setTimeout(() => {
          if (foundUser.isStudent === true) {
            // pagesDiv.innerHTML = `<h2>Welcome, ${email}!</h2>`;
            localStorage.setItem("currentUser", JSON.stringify(foundUser));
            pagesDiv.innerHTML = homepage;
            document.getElementById("admin_name").innerHTML =
              "student_" + foundUser.email.split("@")[0];
            start("student");
          } else {
            localStorage.setItem("currentUser", JSON.stringify(foundUser));
            pagesDiv.innerHTML = homepage;
            document.getElementById("admin_name").innerHTML =
              "admin_" + foundUser.email.split("@")[0];
            start("admin");
          }
        }, 1500);
      } else {
        message.style.color = "red";
        message.innerText = "Invalid email or password!";
      }
    });
  }

  function handleSignUp() {
    const studentCheckbox = document.getElementById("isStudent");
    const universityIdField = document.getElementById("universityIdField");
    const signupForm = document.getElementById("signupForm");

    // إظهار وإخفاء حقل University ID
    studentCheckbox.addEventListener("change", function () {
      universityIdField.style.display = this.checked ? "flex" : "none";
    });

    // عند إرسال نموذج التسجيل
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;
      const isStudent = studentCheckbox.checked;
      const universityId = document.getElementById("universityId").value;

      let users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.some((user) => user.email === email)) {
        alert("Email is already registered. Try logging in.");
        return;
      }

      const newUser = {
        email,
        password,
        isStudent,
        universityId: isStudent ? universityId : null,
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Signup successful! You can now log in.");
      pagesDiv.innerHTML = singInForm;
      handleSignIn();
    });
  }

  function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  function createChart(proj, stu, tasks, finshpro) {
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Projects", "Student", "Tasks", "finished projects"],
        datasets: [
          {
            label: "Count",
            data: [proj, stu, tasks, finshpro],
            backgroundColor: [
              "rgba(41,63,62,255)",
              "rgba(37,57,71,255)",
              "rgba(75,65,42,255)",
              "rgba(55,44,75,255)",
            ],
            borderColor: [
              "rgba(49,91,91,255)",
              "rgba(41,78,105,255)",
              "rgba(148,122,58,255)",
              "rgba(66,50,97,255)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  function displayTasks(currentProjectTasks) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = ""; // Clear previous tasks

    currentProjectTasks.forEach((task) => {
      // Find the assigned student by matching the studentId
      const assignedStudent = users.find((user) => user.id === task.studentId);
      const studentName = assignedStudent ? assignedStudent.email : "Unknown";

      // Create the task card
      const taskCard = document.createElement("div");
      taskCard.classList.add("task-card");

      taskCard.innerHTML = `
        <p><b>Task ID:</b> <span>${task.id}</span></p>
        <p><b>Task Name:</b> <span>${task.name}</span></p>
        <p><b>Description:</b> <span>${task.description}</span></p>
        <p><b>Assigned Student:</b> <span>${studentName}</span></p>
        <p><b>Status:</b> <span>${task.status}</span></p>
      `;

      // Append to tasks container
      tasksContainer.appendChild(taskCard);
    });
  }
  function showProjectDetails(project, assignedStudents) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const currentProjectTasks = tasks.filter(
      (task) => task.projectId == project.id
    );
    // console.log(currentProjectTasks);
    const detailsContainer = document.getElementById("detailsContainer");
    detailsContainer.innerHTML = `
              <h1 id="project-name" class="tittle">${project.name}</h1>
              <p>
                <b>Description:</b
                ><span id="description-text">${project.description}</span>
              </p>
              <p>
                <b>Category:</b
                ><span id="Category-text">${project.category}</span>
              </p>
              <p>
                <b>Students:</b>
                <span id="students-list">${
                  assignedStudents.join(", ") || "No students assigned"
                }</span>
              </p>
              <p>
                <b>Start Date:</b>
                <span id="start-date">${project.start_date}</span>
              </p>
              <p>
                <b>End Date:</b>
                <span id="end-date">${project.end_date}</span>
              </p>
              <h1 class="tittle">Tasks</h1>
              <div id="tasks-container" class="tasks-container">
              </div>
    `;
    displayTasks(currentProjectTasks);

    //   add tasks card array then clos detiles action *****************************************************
    detailsContainer.style.display = "block";
  }

  function displayProjects(projectsList) {
    document.getElementById("projects-cards-container").innerHTML = ""; // مسح المحتوى القديم

    if (projectsList.length === 0) {
      document.getElementById("projects-cards-container").innerHTML =
        "<p>No projects found.</p>";
      return;
    }

    projectsList.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      card.setAttribute("data-id", project.id);

      // تصفية الطلاب المرتبطين بالمشروع وعرض أسمائهم
      const assignedStudents = users
        .filter(
          (user) =>
            project.assigendStudentId.includes(user.id) && user.isStudent
        )
        .map((user) => user.email); // يمكنك تغييره للاسم إذا كان متاحًا
      console.log(assignedStudents);
      card.innerHTML = `
        <h1 class="project-name">${project.name}</h1>
        <p><b>Description:</b> <span>${project.description}</span></p>
        <p><b>Students:</b> <span>${
          assignedStudents.join(", ") || "No students assigned"
        }</span></p>
        <p><b>Category:</b> <span>${project.category}</span></p>
        <p class="currentProgress">${project.status}</p>
        <div class="dates">
          <span>${project.start_date}</span>
          <span>${project.end_date}</span>
        </div>
      `;

      // إضافة حدث عند النقر على البطاقة
      card.addEventListener("click", () => {
        showProjectDetails(project, assignedStudents);
      });
      document.getElementById("projects-cards-container").appendChild(card);
    });
  }

  function openAddProjectPage() {
    console.log("button clicked to add project");
    // mainContainer.innerHTML = AddNewProject;
    const popup = document.getElementById("addProjectPage");
    popup.style.display = "block";
    const closeBtn = document.getElementById("closePopupBtn");
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });
    const addProjectBtn = document.getElementById("addproject-btn");
    // Function to log all inputs when "Add Project" is clicked
    addProjectBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const projectTitle = document.getElementById("projectTittle").value;
      const projectDesc = document.getElementById("project-description").value;
      const students = Array.from(
        document.getElementById("studentsList").selectedOptions
      ).map((option) => option.value);
      const category = document.getElementById("categorysList").value;
      const startDate = document.getElementById("start-date").value;
      const endDate = document.getElementById("end-date").value;
      const status = document.getElementById("statusList").value;

      let studentsList = JSON.parse(localStorage.getItem("users")) || [];
      let assignedStudentIDs = studentsList
        .filter((student) => students.includes(student.email))
        .map((student) => student.id); // Store only student ID

      let newProject = {
        id: Date.now(), // Generate a unique project ID
        name: projectTitle,
        status: status,
        description: projectDesc,
        start_date: startDate,
        end_date: endDate,
        category: category,
        assigendStudentId: assignedStudentIDs, // Store only student IDs
      };
      let projects = JSON.parse(localStorage.getItem("projects")) || [];
      projects.push(newProject);
      localStorage.setItem("projects", JSON.stringify(projects));
      alert("Project added successfully!");
      // console.log({
      //   projectTitle,
      //   projectDesc,
      //   assignedStudentIDs,
      //   category,
      //   startDate,
      //   endDate,
      //   status,
      // });
      popup.style.display = "none";
    });
  }

  function showTasksList() {
    const tasksTableBody = document.getElementById("tasksTableBody");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    let students = JSON.parse(localStorage.getItem("users")) || [];

    if (tasks.length === 0) {
      tasksTableBody.innerHTML = `<tr><td colspan="7" style="text-align: center;">No tasks available</td></tr>`;
      return;
    }

    const projectMap = {};
    projects.forEach((project) => {
      projectMap[project.id] = project.name; // تخزين اسم المشروع حسب الـ ID
    });

    const studentMap = {};
    students.forEach((student) => {
      studentMap[student.id] = student.email; // تخزين إيميل الطالب حسب الـ ID
    });

    // 🔹 إنشاء الصفوف وإضافتها إلى الجدول
    tasks.forEach((task) => {
      const row = document.createElement("tr");

      // ✅ تحديد كلاس اللون بناءً على الحالة
      let statusClass = "";
      switch (task.status.toLowerCase()) {
        case "in progress":
          statusClass = "status-in-progress";
          break;
        case "finished":
          statusClass = "status-completed";
          break;
        case "on hold":
          statusClass = "status-on-hold";
          break;
        case "cancelled":
          statusClass = "status-cancelled";
          break;
        case "pending":
          statusClass = "status-pending";
          break;

        default:
          statusClass = "";
      }

      row.innerHTML = `
        <td>${task.id}</td>
        <td>${projectMap[task.projectId] || "Unknown Project"}</td>
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${studentMap[task.studentId] || "Unknown Student"}</td>
        <td class="${statusClass}">${task.status}</td>
        <td>${task.due_date}</td>
      `;

      tasksTableBody.appendChild(row);
    });
  }

  function openAddTaskPage() {
    // Show the popup
    const popup = document.getElementById("createTaskPopupe");
    popup.style.display = "block";
    const closeBtn = document.getElementById("closeCreateTaskPopupe");

    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });

    // Get current user (admin or student)
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const projectsSelect = document.getElementById("projectOfTask");
    const studentSelect = document.getElementById("studentOfTask");

    projectsSelect.innerHTML = ""; // Clear old options
    studentSelect.innerHTML = ""; // Clear old options

    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (currentUser.isStudent) {
      // Student can only see projects they are assigned to
      const studentProjects = projects.filter((project) =>
        project.assigendStudentId.includes(currentUser.id)
      );

      studentProjects.forEach((project) => {
        let option = document.createElement("option");
        option.value = project.name;
        option.textContent = project.name;
        projectsSelect.appendChild(option);
      });

      // The student can only select themselves
      let studentOption = document.createElement("option");
      studentOption.value = currentUser.email;
      studentOption.textContent = currentUser.email;
      studentSelect.appendChild(studentOption);
      studentSelect.disabled = true; // Disable selection to enforce rule
    } else {
      // Admin can assign tasks to any student in any project
      projects.forEach((project) => {
        let option = document.createElement("option");
        option.value = project.name;
        option.textContent = project.name;
        projectsSelect.appendChild(option);
      });

      const students = users.filter((user) => user.isStudent === true);
      students.forEach((student) => {
        let option = document.createElement("option");
        option.value = student.email;
        option.textContent = student.email;
        studentSelect.appendChild(option);
      });
    }

    // Event listener for adding a task
    const addTaskBtn = document.getElementById("addtask-btn");
    addTaskBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const taskName = document
        .querySelector(".addTaskForm input[type='text']")
        .value.trim();
      const taskDescription = document
        .getElementById("task-description")
        .value.trim();
      const selectedProjectName =
        document.getElementById("projectOfTask").value;
      const selectedStudentEmail =
        document.getElementById("studentOfTask").value;
      const taskStatus = document.getElementById("taskList").value;
      const dueDate = document.getElementById("Due-date").value;

      // Get project ID
      const project = projects.find(
        (proj) => proj.name.toLowerCase() === selectedProjectName.toLowerCase()
      );

      // Get student ID
      const assignedStudent = users.find(
        (stud) =>
          stud.email.toLowerCase() === selectedStudentEmail.toLowerCase()
      );

      if (!project || !assignedStudent) {
        alert("Error: Invalid project or student selection!");
        return;
      }

      const newTask = {
        id: Date.now(),
        name: taskName,
        description: taskDescription,
        projectId: project.id,
        studentId: assignedStudent.id,
        due_date: dueDate,
        status: taskStatus,
      };

      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      alert("Task added successfully!");
      popup.style.display = "none";
    });
  }

  function handleAddMessage() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let selectedAdmin = JSON.parse(localStorage.getItem("selectedAdmin"));
    let selectedStudent = JSON.parse(localStorage.getItem("selectedStudent"));
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!currentUser) {
      console.error("Error: No logged-in user.");
      return;
    }

    const message = document.getElementById("inputmessage").value.trim();
    if (!message) return;

    let admin, student;

    if (currentUser.isStudent) {
      student = currentUser;
      admin = selectedAdmin;
    } else {
      admin = currentUser;
      student = selectedStudent;
    }

    if (!student || !admin) {
      console.error("Error: Invalid student or admin.");
      return;
    }

    const chats = JSON.parse(localStorage.getItem("chats")) || [];
    let chatEntry = chats.find(
      (chat) => chat.adminId === admin.id && chat.studentId === student.id
    );

    if (!chatEntry) {
      chatEntry = { adminId: admin.id, studentId: student.id, chats: [] };
      chats.push(chatEntry);
    }

    chatEntry.chats.push({ senderId: currentUser.id, message });

    localStorage.setItem("chats", JSON.stringify(chats));

    // Reload chat after sending message
    loadChat(student.email, admin.email);
    document.getElementById("inputmessage").value = "";
  }

  function updateStats() {
    const users = getData("users");
    const projects = getData("projects");
    const tasks = getData("tasks");
    const finishedProjects = projects.filter(
      (proj) => proj.status === "finished"
    ); // Filter finished projects

    // Update HTML elements
    document.getElementById("number-project").innerText = projects.length;
    const stunumber = users.filter((user) => user.isStudent == true).length;
    document.getElementById("number-student").innerText = stunumber;
    document.getElementById("number-task").innerText = tasks.length;
    document.getElementById("number-finished-project").innerText =
      finishedProjects.length;
    createChart(
      projects.length,
      stunumber,
      tasks.length,
      finishedProjects.length
    );
  }

  function handellogout() {
    const pagesDiv = document.getElementById("pages");
    pagesDiv.innerHTML = page1;
    const logInBtn = document.getElementById("loginbtn");
    const signUpBtn = document.getElementById("signupbtn");
    if (logInBtn) {
      logInBtn.addEventListener("click", function () {
        pagesDiv.innerHTML = singInForm;
        handleSignIn();
      });
    }

    if (signUpBtn) {
      signUpBtn.addEventListener("click", function () {
        pagesDiv.innerHTML = signUpForm;
        handleSignUp();
      });
    }
  }

  function loadChat(useremail, adminEmail) {
    const chatbox = document.getElementById("chatBoxBody");
    const selectedChatUser = document.getElementById("chatwithName");
    chatbox.innerHTML = "";

    // Display the name of the person being chatted with
    selectedChatUser.textContent = useremail.split("@")[0];

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const chats = JSON.parse(localStorage.getItem("chats")) || [];

    // Get student and admin IDs
    const student = users.find(
      (user) => user.email === useremail && user.isStudent
    );
    const admin = users.find(
      (user) => user.email === adminEmail && !user.isStudent
    );

    if (!student || !admin) {
      console.log("Error: Invalid student or admin.");
      console.error("Received student email:", useremail);
      console.error("Received admin email:", adminEmail);
      console.error("Users in storage:", users);
      return;
    }

    const studentId = student.id;
    const adminId = admin.id;

    // Find chat history
    const chatHistory = chats.find(
      (chat) => chat.adminId === adminId && chat.studentId === studentId
    );

    if (chatHistory) {
      chatHistory.chats.forEach((chat) => {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("massege");

        // Different class for styling (admin vs student messages)
        if (chat.senderId === adminId) {
          messageDiv.classList.add("admin-message");
        } else {
          messageDiv.classList.add("student-message");
        }

        messageDiv.textContent = chat.message;
        chatbox.appendChild(messageDiv);
      });
    } else {
      chatbox.innerHTML =
        "<div class='massege'>No conversation started yet.</div>";
    }
  }

  function setUpChats() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const stuList = document.getElementById("stu-list");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    stuList.innerHTML = ""; // Clear previous list

    if (!currentUser) {
      console.error("Error: No logged-in user.");
      return;
    }

    let isStudent = currentUser.isStudent;

    if (isStudent) {
      // Show list of admins for students
      let admins = users.filter((user) => !user.isStudent);
      admins.forEach((admin) => {
        let adminDiv = document.createElement("span");
        adminDiv.textContent = admin.email;
        stuList.appendChild(adminDiv);
        adminDiv.addEventListener("click", function () {
          localStorage.setItem("selectedAdmin", JSON.stringify(admin));
          loadChat(currentUser.email, admin.email);
        });
      });
    } else {
      // Show list of students for admins
      let students = users.filter((user) => user.isStudent);
      students.forEach((student) => {
        let studentDiv = document.createElement("span");
        studentDiv.textContent = student.email;
        stuList.appendChild(studentDiv);
        studentDiv.addEventListener("click", function () {
          localStorage.setItem("selectedStudent", JSON.stringify(student));
          loadChat(student.email, currentUser.email);
        });
      });
    }
  }
  function start(type) {
    constlogoutbtn = document
      .getElementById("logout-btn")
      .addEventListener("click", handellogout);
    const buttons = document.querySelectorAll(".nav-btn");
    const mainContainer = document.querySelector("main");
    if (buttons) {
      // تعيين الزر الأول كـ active عند تحميل الصفحة
      buttons[0].classList.add("active");
      mainContainer.innerHTML = HomeOverView;
      updateStats();

      buttons.forEach((button) => {
        button.addEventListener("click", function () {
          // إزالة الـ active من كل الأزرار
          buttons.forEach((btn) => btn.classList.remove("active"));
          // إضافة active للزر الذي تم النقر عليه
          this.classList.add("active");

          // Change main content based on active button
          if (this.id === "home-btn") {
            mainContainer.innerHTML = HomeOverView;
            updateStats();
          } else if (this.id === "projects-btn") {
            mainContainer.innerHTML = Projects;
            const projects = JSON.parse(localStorage.getItem("projects"));
            const users = JSON.parse(localStorage.getItem("users")) || [];

            const searchInput = document.getElementById("searchproject"); //****** */                     *****************return************
            searchInput.addEventListener("input", filterProjects);

            const statusFilter = document.getElementById("status-filter");
            statusFilter.addEventListener("change", function () {
              filterProjects();
            });
            // دالة البحث عن المشاريع
            function filterProjects() {
              const searchValue = searchInput.value.toLowerCase();
              const selectedStatus = statusFilter.value.toLowerCase();

              // تصفية المشاريع بناءً على البحث وحالة المشروع
              const filteredProjects = projects.filter((project) => {
                const matchesSearch =
                  project.name.toLowerCase().includes(searchValue) ||
                  project.description.toLowerCase().includes(searchValue);

                const matchesStatus =
                  selectedStatus === "all statuses" ||
                  project.status.toLowerCase() === selectedStatus;

                return matchesSearch && matchesStatus;
              });

              displayProjects(filteredProjects); // إعادة عرض المشاريع بعد التصفية
            }
            displayProjects(projects);
            if (type == "student") {
              const addProjectBtn = document.getElementById("addNewProject");
              addProjectBtn.style.display = "none";
            } else {
              document
                .getElementById("addNewProject")
                .addEventListener("click", openAddProjectPage);
            }
          } else if (this.id === "tasks-btn") {
            mainContainer.innerHTML = Tasks;

            document
              .getElementById("openCareatTaskPopupe-btn")
              .addEventListener("click", openAddTaskPage);

            showTasksList();
          } else if (this.id === "chat-btn") {
            mainContainer.innerHTML = Chat;
            setUpChats();
            document
              .getElementById("sendm")
              .addEventListener("click", handleAddMessage);

            document
              .getElementById("inputmessage")
              .addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                  event.preventDefault(); // منع السلوك الافتراضي (مثل إرسال النموذج)
                  handleAddMessage(); // استبدل هذا بالكود الذي تريده
                }
              });
          }
        });
      });
    } ///ggg
  }

  //   end file
});
