import { useState, useEffect } from "react";
import useWindowSizeChange from "./useWindowSizeChange";

export default function useCalculateSectionHeight() {
    const [sectionHeight, setSectionHeight] = useState("100px");
    const [windowHeight, setWindowHeight] = useState(0);
    const calculateSectionHeight = () => {

		const bottom = window.innerHeight;
		const top = document.getElementsByTagName("section")[0].getBoundingClientRect().top;
		return `${bottom-top}px`;
	}

	useWindowSizeChange(() => {	setSectionHeight(calculateSectionHeight()) })

	useEffect(() => {
		if (window.innerHeight != windowHeight) {
			setWindowHeight(windowHeight);
			setSectionHeight(calculateSectionHeight());
		}
	}, []);

	return sectionHeight;
}