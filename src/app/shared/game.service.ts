export class VideoGameService {
  videoGames = [
    {title: 'Zelda',
     description: "It's pretty cool I suppose",
     tags: ['adventure', 'high fantasy']}
  ]

  addVideoGame(title: string, description: string, tags: string[]) {
    this.videoGames.push({title: title, description: description, tags: tags });
  }
}
