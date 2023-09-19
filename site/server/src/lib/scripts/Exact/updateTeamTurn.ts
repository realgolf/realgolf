export function updateTeamTurn(color: any) {
  const teamTurnDisplay = document.getElementById("team_turn_display");
  if (teamTurnDisplay) {
    teamTurnDisplay.innerHTML = `Current Team Turn: ${color}`;
  }
}
