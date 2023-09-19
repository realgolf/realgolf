export function updatePointsDisplay(
  teams: { color: string | number; points: any }[]
) {
  const display = document.querySelector("#points_display");
  if (display) {
    let displayContent = teams
      .map((team: { color: string | number; points: any }) => {
        const storedData = localStorage.getItem(`exact_${teams.length}_data`);
        const parsedData = storedData ? JSON.parse(storedData) : {};
        const points = parsedData[team.color]
          ? parsedData[team.color].points
          : team.points;
        return `${team.color} team points: ${points}`;
      })
      .join("<br>");
    display.innerHTML = displayContent;
  }
}
