import React, { useState } from 'react';
import  Sketch  from 'react-p5';

const HangmanCanvas: React.FC = () => {
  const [wrongGuessCount, setWrongGuessCount] = useState(0);

  const setup = (p5: any, canvasParentRef: any) => {
    
    p5.createCanvas(500, 400).parent(canvasParentRef);
    // p5.stroke(108,108,108);
    p5.a = p5.height
    p5.x = p5.width
    p5.b = 0
    p5.angle = 0
    p5.step = 0.122
    p5.step4Y = 200
    p5.step4X = p5.width / 2

    p5.step5Y = 200
    p5.step5X = p5.width / 2

    p5.step6Y = 300
    p5.step6X = p5.width / 2

    p5.step7Y = 300
    p5.step7X = p5.width / 2

    //step 3
    p5.c = 200


    //step 4
    p5.step4 = 0


   
  };

  const draw = (p5: any) => {

    p5.background(255,255,255)
    p5.strokeWeight(10)
    drawHangman(p5,wrongGuessCount)
   
  };

  const drawHangman = (p5: any, wrongGuessCount: number) => {
    p5.stroke(108,108,108);

    //draw pole
    if(wrongGuessCount === 1){
        p5.strokeWeight(10)
        p5.line(p5.width,p5.height,p5.width,p5.a)
        p5.a = p5.a - 5.0
        if(p5.a < 0){
            p5.a = 0
        }
    
        if(p5.a === 0){
            p5.strokeWeight(10)
            p5.line(p5.width, 0, p5.x, 0)
    
            p5.x = p5.x - 5.0
        
            if(p5.x < p5.width / 2){
                p5.x = p5.width / 2
            }
        }
    
        if(p5.x === p5.width / 2){
            p5.strokeWeight(10)
            p5.line(p5.width / 2, 0, p5.width / 2, p5.b)
    
            p5.b = p5.b + 5
    
    
            if(p5.b > 50){
                p5.b = 50
            }
    
        }
    }

    // Draw head 
    if(wrongGuessCount === 2){
        p5.line(p5.width,p5.height,p5.width,0)
        p5.line(p5.width, 0, p5.width / 2, 0)
        p5.line(p5.width / 2, 0, p5.width / 2, 50)


        p5.strokeWeight(10)
        p5.arc(p5.width / 2, p5.height / 4, 100, 100, 0, p5.angle);
        
        p5.angle += p5.step

        if(p5.angle > 6.28){
            p5.angle = 6.28
        }
       
    }

    //draw body
    if(wrongGuessCount === 3){
        p5.line(p5.width,p5.height,p5.width,0)
        p5.line(p5.width, 0, p5.width / 2, 0)
        p5.line(p5.width / 2, 0, p5.width / 2, 50)
        p5.arc(p5.width / 2, p5.height / 4, 100, 100, 0, 6.28);

        let startPoint = 250
        // p5.a = 250
        p5.strokeWeight(10)
        p5.line(p5.width / 2,150,p5.width / 2,p5.c)

        p5.c += 5

        if(p5.c > 300){
            p5.c = 300
        }
        
    }

    //draw right arm
    if(wrongGuessCount === 4){
        p5.line(p5.width,p5.height,p5.width,0)
        p5.line(p5.width, 0, p5.width / 2, 0)
        p5.line(p5.width / 2, 0, p5.width / 2, 50)
        p5.arc(p5.width / 2, p5.height / 4, 100, 100, 0, 6.28);
        p5.line(p5.width / 2,150,p5.width / 2,300)
        let targetX = 330

        p5.strokeWeight(10)
        p5.line(p5.width / 2, 200, p5.step4X, p5.step4Y)

        p5.step4Y += 1
        p5.step4X += 2

        if(p5.step4Y > 240 && p5.step4X > targetX){
            p5.step4Y = 240
            p5.step4X = targetX
        }
    }

    //draw left arm
    if(wrongGuessCount === 5){
        p5.line(p5.width,p5.height,p5.width,0)
        p5.line(p5.width, 0, p5.width / 2, 0)
        p5.line(p5.width / 2, 0, p5.width / 2, 50)
        p5.arc(p5.width / 2, p5.height / 4, 100, 100, 0, 6.28);
        p5.line(p5.width / 2,150,p5.width / 2,300)
        p5.line(p5.width / 2, 200, 340, 240)
        let target5X = 170

        p5.strokeWeight(10)
        p5.line(p5.width / 2, 200, p5.step5X, p5.step5Y)

        p5.step5Y += 1
        p5.step5X -= 2

        if(p5.step5Y > 240 && p5.step5X < target5X){
            p5.step5Y = 240
            p5.step5X = target5X
        }

    }

    //draw right leg
    if(wrongGuessCount === 6){
        p5.line(p5.width,p5.height,p5.width,0)
        p5.line(p5.width, 0, p5.width / 2, 0)
        p5.line(p5.width / 2, 0, p5.width / 2, 50)
        p5.arc(p5.width / 2, p5.height / 4, 100, 100, 0, 6.28);
        p5.line(p5.width / 2,150,p5.width / 2,300)
        p5.line(p5.width / 2, 200, 340, 240)
        p5.line(p5.width / 2, 200, 170, 240)

        let target6X = 330

        p5.strokeWeight(10)
        p5.line(p5.width / 2, 300, p5.step6X, p5.step6Y)

        p5.step6Y += 1
        p5.step6X += 2

        if(p5.step6Y > 340 && p5.step6X > target6X){
            p5.step6Y = 340
            p5.step6X = target6X
        }
    }

    //draw left leg
    if(wrongGuessCount === 7){
        p5.line(p5.width,p5.height,p5.width,0)
        p5.line(p5.width, 0, p5.width / 2, 0)
        p5.line(p5.width / 2, 0, p5.width / 2, 50)
        p5.arc(p5.width / 2, p5.height / 4, 100, 100, 0, 6.28);
        p5.line(p5.width / 2,150,p5.width / 2,300)
        p5.line(p5.width / 2, 200, 340, 240)
        p5.line(p5.width / 2, 200, 170, 240)
        p5.line(p5.width / 2, 300, 330, 340)

        let target7X = 170

        p5.strokeWeight(10)
        p5.line(p5.width / 2, 300, p5.step7X, p5.step7Y)

        p5.step7Y += 1
        p5.step7X -= 2

        if(p5.step7Y > 340 && p5.step7X < target7X){
            p5.step7Y = 340
            p5.step7X = target7X
        }
    }
  }

  return (
    <div>
    <div className='hangman-container'>
      <Sketch setup={setup} draw={draw} />
      <button onClick={() => setWrongGuessCount(wrongGuessCount + 1)}>Guess Wrong Letter</button>
      </div>
    </div>
  );
};

export default HangmanCanvas;



