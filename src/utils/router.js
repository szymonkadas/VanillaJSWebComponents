const router = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    window.dispatchEvent(new Event('popstate'));
};
window.route = router;

export default router;
