from turtle import *

#we want to print a house

#step 1:draw a squeare

width(7)
color("purple")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#draw a door

forward(70)
color("yellow")
left(90)
forward(120)     #height of the door
right(90)
forward(60)
right(90)
forward(120)

begin_fill()
right(90)
forward(60)     #height of the door
right(90)
forward(120)
right(90)
forward(60)
end_fill()
right(90)
forward(120)



#draw a roof
penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#draw a window

color("purple")
left(120)
right(90)
forward(30)
right(90)
left(180)
forward(40)
right(90)
forward(95)
right(90)
forward(40)

color("purple")
begin_fill()
right(90)
forward(90)
right(90)
forward(43)
right(90)
forward(90)
end_fill()







exitonclick()


























