import tkinter as tk
root = tk.Tk()
root.geometry("500x500")

def create_pressed():
    names = ["espresso","banana","strawberry"]
    for name in names:
        new_button = tk.Button(root, text=name)
        new_button.pack()


main_button = tk.Button(root, text="Flavor?", command=create_pressed)
main_button.pack()


def create_pressed2():
    names = ["milk","ice","spinach"]
    for name in names:
        new_button = tk.Button(root, text=name)
        new_button.pack()


main_button = tk.Button(root, text="Flavor?", command=create_pressed2)
main_button.pack()

root.mainloop()