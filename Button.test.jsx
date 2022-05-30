
import App from "../App";
import { fireEvent, render,screen,} from "@testing-library/react";
import { Button } from "./Button";
import renderer from "react-test-renderer";

describe("Button Tests", function(){
  
    it("should have button in dom",function(){
        render(<Button>Click me</Button>);
        let button = screen.getByText("Click me");
        expect(button).toBeInTheDocument();
    });
    it("should render based on testid", () =>{
       render(<Button>Click me</Button>); //you also render the App because app file and inside app Button is render.
       let button=screen.getByTestId("customButton");
       expect(button).toBeInTheDocument();
    });
     it("should change theme",function(){
        render(<App></App>);
        let h3 =screen.getByText("The theme is light");
        expect(h3).toHaveTextContent("light");

        let themeButton=screen.getByText("Click me");
        fireEvent.click(themeButton);
        expect(h3).toHaveTextContent("dark");
    });

    it("should called given function",function() {
        const mockfn=jest.fn();
        render(<Button onClick={mockfn}>Click me</Button>);
        const btn=screen.getByText("Click me");
        fireEvent.click(btn);
        expect(mockfn).toBeCalled();
    });
    //first install the npm i react-test-renderer --save-dev
    //is create the new snapshot name file inside component of that button show it in json format 
    it("Should match snapshot",function(){
        const tree = renderer.create(  <Button colorScheme={"green"} variant="bordered">Add Counter</Button>)
         // .toJSON();   
        expect(tree).toMatchSnapshot();
    });
});