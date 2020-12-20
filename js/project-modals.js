const projectModalFullStack = document.querySelector('#personal-project-full-stack');
const projectModalWeddingProject = document.querySelector('#personal-project-wedding-project');
const projectModaProTest = document.querySelector('#personal-project-pro-test');
const projectModalProjectGoit = document.querySelector('#personal-project-goit');

const projectModalQuestify = document.querySelector('#team-project-questify');
const projectModalItTest = document.querySelector('#team-project-it-test');

const projectOpenBtnFullStack = document.querySelector('#personal-project-full-stack-btn');
const projectOpenBtnWeddingProject = document.querySelector('#personal-project-wedding-project-btn');
const projectOpenBtnProTest = document.querySelector('#personal-project-pro-test-btn');
const projectOpenBtnProjectGoit = document.querySelector('#personal-project-goit-btn');

const projectOpenBtnQuestify = document.querySelector('#team-project-questify-btn');
const projectOpenBtnItTest = document.querySelector('#team-project-it-test-btn');

const projectModals = [ projectModalFullStack, projectModalWeddingProject, projectModaProTest, projectModalProjectGoit, projectModalQuestify, projectModalItTest];
const projectBtns = [ projectOpenBtnFullStack, projectOpenBtnWeddingProject, projectOpenBtnProTest, projectOpenBtnProjectGoit, projectOpenBtnQuestify, projectOpenBtnItTest];

projectBtns.forEach((btn, index) => {
    const projectModal = projectModals[index];

    if (btn) {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            projectModal.classList.add(MODAL_ACTIVE_CLASS);

            document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
        })
    }
});