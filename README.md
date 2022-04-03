# Stockoss-Idle

## How to launch

To launch this project just **git clone** it, then go into the repo and do **yarn start** 


## Remarks on my work

The atomic design pattern isn't fully respected, and it is honestly overkill for such a small project.

I took another "way" of doing the project because I analysed that the goal did not need to treat robots as individuals, but rather as a numerical unit, which would make the project still do what it is supposed to, but in an easier way, then if every robots were an object.
That approach is more performance efficient, it doesn't change the behavior of the application, and it allows for a better representation of the "train of thought".
To summarise things in another way: Why work with objects, when what the user works with is mostly integers ? 
Another reason why I chose this approach is that making individual robots (via a class with ids, methods ...) is much more repetitive, both in the testing phase, but also and mostly in the initialState itself. It isn't a big issue but again: why repeat something that acts the same ? There is no need in the given project, though if it was a real project one might want to create multiple types of robots and it MIGHT therefor be interesting to use an "object oriented" approach. However, as stated, this is not the case in this project. So I went with numbers instead of objects.

I also took a little bit of time to add style and made it responsive. Nothing fancy, very minimal, using the Styled-Components library.

I finished the functional part of this project in 28 hours (Saturday evening) instead of 48h, I just slept before sending it and making this README.

In a longer project, that requires constant improvement, I would have added pipelines with commit message checks, maybe storybooks, the formater pattern (in case of API changes), and would have discussed with the team to standardize the testing, including adding end-to-end testing. These would help ensure coordination between teams and the quality of the project.


## Remarks on the project itself

I think this test isn't as easy as it seems, especialy in terms of timing. To finish it it requires a train of thought that most juniors wont have automaticaly because of a lack of experience. Its defenetely more confirmed developer oriented, but isn't too hard that it would be a senior level. I think this test is good (and thats coming from someone who doesn't like technical tests because they are usualy validated in a random fascion with no predefined checklist). I was very surprised by the notions that this test touched upon, and it was fun ! 

I think it would be nice to have API Calls on a mock api, to test the person's knowledge on front-end "API Related" architectures/design patterns (like the formatter for example).

