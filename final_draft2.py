import tkinter as tk
root = tk.Tk()
root.geometry("500x500")

first_flavor = None
second_flavor = None

aftermixed = {
    ("espresso", "milk"): "caffe latte",
    ("espresso", "ice"): "frozen espresso",
    ("espresso", "spinach"): "green espresso",

    ("banana", "milk"): "banana shake",
    ("banana", "ice"): "frozen banana",
    ("banana", "spinach"): "green banana smoothie",

    ("strawberry", "milk"): "strawberry shake",
    ("strawberry", "ice"): "frozen strawberry",
    ("strawberry", "spinach"): "green strawberry smoothie",
}

result_label = tk.Label(root, text = "choose 2 flavors")
result_label.pack()

def choose_flavor(flavor):
    global first_flavor, second_flavor

    if first_flavor is None:
       first_flavor = flavor
       result_label.config(text=f"first_flavor: {first_flavor}")
    else:
       second_flavor = flavor
       result_label.config(text=f"First: {first_flavor}, Second: {second_flavor}")

       mix_name = aftermixed.get((first_flavor, second_flavor))

    first_flavor = None
    second_flavor = None

def create_pressed1():
    names = ["espresso","banana","strawberry"]
    for name in names:
        new_button = tk.Button(root, text=name, command=lambda n=name: choose_flavor(n))
        new_button.pack()


main_button1 = tk.Button(root, text="Flavor group 1", command=create_pressed1)
main_button1.pack()


def create_pressed2():
    names = ["milk","ice","spinach"]
    for name in names:
        new_button = tk.Button(root, text=name, command=lambda n=name: choose_flavor(n))
        new_button.pack()


main_button2 = tk.Button(root, text="Flavor group 2", command=create_pressed2)
main_button2.pack()

root.mainloop()