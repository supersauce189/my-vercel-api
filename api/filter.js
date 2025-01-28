export default function handler(req, res) {
  const players = [
    { name: "Player1", score: 100 },
    { name: "Player2", score: 90 },
    { name: "Player1", score: 85 }
  ];

  // Extract 'name' from the request body
  const { name } = req.body;

  // If 'name' is not provided, return an error
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  // Filter players by name
  const filteredPlayers = players.filter(player => player.name === name);

  // Return the filtered players
  res.status(200).json(filteredPlayers);
}
