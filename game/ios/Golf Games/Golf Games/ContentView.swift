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

        @Environment(\.colorScheme) var colorScheme

        var body: some View {
            VStack {
                Text(label).font(.title)
                Text(content).padding()
            }
            .border(borderColor, width: 1)
            .padding()
        }

        var borderColor: Color {
            return colorScheme == .dark ? .white : .black
        }
    }

    // Simulating the imported types
    struct SvelteTypes {}

    @State private var data = PageData(name: "Julian Hammer")

    @Environment(\.colorScheme) var colorScheme

    var body: some View {
        NavigationView {
            ScrollView {
                VStack(alignment: .leading, spacing: 16) {
                    Text("Dashboard").font(.largeTitle).padding()

                    Text("Welcome to \"Golf Games\" \(data.name) - your ultimate destination for golf challenges!\nDiscover \"4 Winning\", \"Exact\", and \"Precision\" - captivating golf experiences tested with trainers.")
                        .font(.body)
                        .bold()
                        .padding()
                        .lineLimit(nil)
                        .background(backgroundBasedOnColorScheme())
                        .border(borderColorBasedOnColorScheme(), width: 1)

                    Card(label: "Modi", content: "Here you can find all game modes you can play, just click on the link for the game you want to play.")
                        .background(backgroundBasedOnColorScheme())

                    Card(label: "Rules", content: "Everything about the Rules is in the")
                        .background(backgroundBasedOnColorScheme())

                    Card(label: "Levels", content: "If the normal games are too boring, you can find more challenging ideas in")
                        .background(backgroundBasedOnColorScheme())

                    Spacer()

                    Text("But most important, enjoy the games and have fun!").font(.title2).padding()
                }
                .padding()
            }
        }
    }

    func backgroundBasedOnColorScheme() -> Color {
        return colorScheme == .dark ? .black : .white
    }

    func borderColorBasedOnColorScheme() -> Color {
        return colorScheme == .dark ? .white : .black
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
