# Functional composition

## What we will cover

* Composing
* Currying
* The Either monad

## Notes

In functional programming a popular concept is composing.

Composing is the idea that from small pure functions you
can glue them together to create larger more complex functions.

In theory this will allow you to write less code and reuse
most of the logic you write.

Done correctly it creates the "best" code that you can write
and if we started doing things in this manner perhaps our
software would be better than we could ever hope.

In practice this is VERY hard to do for anything that is non
trivial and on top of that it requires specialist knowledge
of functional practices that most programmers do not have.

I have worked with programmers who struggled with `.map` so
to my great disappointment I will show you something you
will most likely never use in the real world.

If I see you do this in a non functional codebase I will take
away your programmer license!
