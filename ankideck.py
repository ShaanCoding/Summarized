import genanki
import json

#Change your address to something else
path = r"C:\Users\12645\Desktop\Uni\SYNCHackthon2021\test.json"

jsonload = json.load(open(path))

questions = []
answers = []
for obj in jsonload:
    for key in obj:
        if key == "question":
            questions.append(obj[key])
        else:
            answers.append(obj[key])

# Testing purpose
# print(questions)
# print(answers)

qsize = len(questions)

field_list1 = []
template_list = []
qnalist = []

# Generating fields and templates under genanki's rules
for i in range(qsize):
    field_list1.append({'name': 'Question{}'})
    field_list1.append({'name': 'Answer{}'})
    template_list.append({})
    template_list[i].update({'name': 'Card {}'.format(i + 1)})
    template_list[i].update({'qfmt': '{{Question}}'})
    template_list[i].update({'afmt': '{{FrontSide}}<hr id="answer">{{Answer}}'})

    qnalist.append(questions[i])
    qnalist.append(answers[i])

# Striping spaces and '\n's for unifrom
for i in range(2 * qsize):
    qnalist[i] = qnalist[i].strip()

# Printing out the fields, the templates, the questions and the answers.
# print(field_list1)
# print(template_list)
# print(qnalist)

# Generating model
my_model = genanki.Model(
    1607392319,
    'my_model',
    fields=field_list1,
    templates=template_list
)

# Generating note
my_note = genanki.Note(
    model=my_model,
    fields=qnalist)

# Generating deck object
my_deck = genanki.Deck(
    2059400110,
    'Your Deck')

# Adding my_note to the deck
my_deck.add_note(my_note)

# Generating the .apkg file to the current directory.
genanki.Package(my_deck).write_to_file('output.apkg')

#
# # Hardcoded
# my_model = genanki.Model(
#   1607392319,
#   'Simple Model',
#   fields=[
#     {'name': 'Question'},
#     {'name': 'Answer'},
#     {'name': 'Question1'},
#     {'name': 'Answer1'},
#   ],
#   templates=[
#     {
#       'name': 'Card 1',
#       'qfmt': '{{Question}}',
#       'afmt': '{{FrontSide}}<hr id="answer">{{Answer}}'},
#     {
#       'name': 'Card 2',
#       'qfmt': '{{Question1}}',
#       'afmt': '{{FrontSide}}<hr id="answer">{{Answer1}}',
#     },
#   ])
#
# my_note = genanki.Note(
#   model=my_model,
#   fields=['Q0', 'A0', 'Q1', 'A1'])
#
# my_deck = genanki.Deck(
#   2059400110,
#   'Country Capitals')
#
# my_deck.add_note(my_note)
#
# genanki.Package(my_deck).write_to_file('output1.apkg')
#
#Text file sorting
# temp_str = ""
# for line in open(path)
#    for letter in line:
#         if letter == ";":
#             questions.append(temp_str)
#             temp_str = ""
#         elif letter == "\n":
#             answers.append(temp_str)
#             temp_str = ""
#         else:
#             temp_str += letter
