import genanki
import glob

path = r"C:\Users\12645\Desktop\Uni\SYNCHackthon2021\*.txt"
files = glob.glob(path)


answers = []
questions = []
temp_str = ""
for file in files:
    for line in open(file, "r"):
        for letter in line:
            if letter == ";":
                questions.append(temp_str)
                temp_str = ""
            elif letter == "\n":
                answers.append(temp_str)
                temp_str = ""
            else:
                temp_str += letter

qsize = len(questions)

my_model = genanki.Model(
  1607392319,
  'Simple Model',
  fields=[
    {'name': 'Question'},
    {'name': 'Answer'},
  ],
  templates=[
    {
      'name': 'Card 1',
      'qfmt': '{{Question}}',
      'afmt': '{{FrontSide}}<hr id="answer">{{Answer}}',
    },
  ])

my_note = genanki.Note(
  model= my_model,
  fields=[questions, answers])


my_deck = genanki.Deck(
  2059400110,
  'Testing')

my_deck.add_note(my_note)

genanki.Package(my_deck).write_to_file('output.apkg')