import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import Home from "./Home";

describe("home", () => {
	test("Home renders", () => {
		const home = shallow(<Home />);
		expect(home).toBeDefined();
	});
});
