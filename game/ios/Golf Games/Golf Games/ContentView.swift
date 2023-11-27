import SwiftUI

struct ContentView: View {
    // Simulating the PageData structure
    struct PageData {
        var name: String
    }

    // Simulating the imported Card component
    struct Card: View {
        var label: String
        var content: String

        var body: some View {
            VStack {
                Text(label).font(.title)
                Text(content).padding()
            }.border(Color.black, width: 1).padding()
        }
    }

    // Simulating the imported types
    struct SvelteTypes {}

    @State private var data = PageData(name: "John Doe")

    var body: some View {
        VStack {
            Text("Dashboard").font(.largeTitle).padding()

            Text("Welcome to \"Golf Games\" \(data.name) - your ultimate destination for golf challenges!\nDiscover \"4 Winning\", \"Exact\", and \"Precision\" - captivating golf experiences tested with trainers.")
                .font(.body).bold().padding()

            Card(label: "Modi", content: "You can find all the games in the").background(Color.green).foregroundColor(Color.white)

            Card(label: "Rules", content: "Everything about the Rules is in the").background(Color.green).foregroundColor(Color.white)

            Card(label: "Levels", content: "If the normal games are too boring, you can find more challenging ideas in").background(Color.green).foregroundColor(Color.white)

            Text("But most important, enjoy the games and have fun!").font(.title2).padding()
        }.padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
