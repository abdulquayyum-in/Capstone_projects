
function useRetryUntilResolved(callback, interval = 100) {
    let resoved = false
    // const [hasResolved, setHasResolved] = React.useState(false);
    setInterval(
        () => {
            const result = callback();
            if (result) {
                resolved = true
            }
        },
        resolved ? null : interval
    );
    return hasResolved;
}
// export default useRetryUntilResolved;