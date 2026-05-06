import tkinter as tk
root = tk.Tk()
root.geometry("500x500")

from PIL import Image, ImageTk

image = Image.open("juicebar.png")
image =image.resize((500, 500))
bg = ImageTk.PhotoImage(image)


bg_label = tk.Label(root, image=bg)
bg_label.place(x=0, y=0, relwidth=1, relheight=1)

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

    ("milk", "ice"): "iced milk",
}

image_dict = {
     "caffe latte": "caffe latte.png",
     "frozen espresso": "frozen espresso.png",
     "green espresso": "green espresso.png",
     "banana shake": "banana shake.png",
     "frozen banana": "frozen banana.png",
     "green banana smoothie": "green banana smoothie.png",
     "strawberry shake": "strawberry shake.png",
     "frozen strawberry": "frozen strawberry.png",
     "green strawberry smoothie": "green strawberry smoothie.png",

     "iced milk": "ice milk.png",

}

result_label = tk.Label(root, text = "choose 2 flavors from each flavor groups", font = ("Helvetica", 16, "bold"))
result_label.pack()

image_label = tk.Label(root)
image_label.pack()

def choose_flavor(flavor):
    global first_flavor, second_flavor

    if first_flavor is None:
       first_flavor = flavor
       result_label.config(text=f"first_flavor: {first_flavor}")
    else:
       second_flavor = flavor
       result_label.config(text=f"second_flavor: {second_flavor}")

       mix_name = aftermixed.get((first_flavor, second_flavor))

       if mix_name is None:
        mix_name = aftermixed.get((second_flavor, first_flavor))

       if mix_name is None:
          result_label.config(text=f"{first_flavor}, + {second_flavor} -> not on our menu")

       else:
            result_label.config(text=f"{first_flavor} + {second_flavor} -> {mix_name}")  
            image_path = image_dict.get(mix_name)
            if image_path:
                img = Image.open(image_path)
                img = img.resize((180, 180))
                photo = ImageTk.PhotoImage(img)

                image_label.config(image=photo)
                image_label.image = photo

       first_flavor = None
       second_flavor = None
       
       


def create_pressed1():
    names = ["espresso","banana","strawberry"]
    for name in names:
        new_button = tk.Button(root, text=name, command=lambda n=name: choose_flavor(n))
        new_button.pack()



def create_pressed2():
    names = ["milk","ice","spinach"]
    for name in names:
        new_button = tk.Button(root, text=name, command=lambda n=name: choose_flavor(n))
        new_button.pack()


main_button1 = tk.Button(root, text="Flavor group 1", command=create_pressed1)
main_button1.pack()

main_button2 = tk.Button(root, text="Flavor group 2", command=create_pressed2)
main_button2.pack()






root.mainloop()

