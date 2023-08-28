import React from "react"
const SelectIcon = (props: { color: string }) => (
    // <svg className="select-icon" width="8" height="8" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M4.2489 2.51852L1.83487 0.180049C1.71542 0.0647459 1.55367 -3.51294e-08 1.38504 -2.77586e-08C1.21642 -2.03877e-08 1.05467 0.0647459 0.935228 0.180049C0.876519 0.236723 0.829933 0.304077 0.798149 0.378227C0.766364 0.452377 0.75 0.531888 0.75 0.612176C0.75 0.692464 0.766364 0.77193 0.798149 0.84608C0.829933 0.92023 0.876519 0.987585 0.935229 1.04426L3.80658 3.82571C3.92513 3.93715 4.08371 3.99963 4.2489 4C4.41638 4 4.57745 3.9376 4.69873 3.82571L7.57007 1.04426C7.68557 0.926777 7.75 0.770777 7.75 0.608541C7.74685 0.488761 7.70779 0.372437 7.63757 0.273797C7.56735 0.175156 7.46902 0.0984399 7.35456 0.0530126C7.2401 0.007585 7.11447 -0.00460653 6.99299 0.017951C6.87151 0.0405082 6.75943 0.0968413 6.67043 0.180049L4.2489 2.51852Z" fill={props.color ? props.color : 'black'} />
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
        <path d="M9.63039 11.2115C9.33432 11.6103 8.73575 11.7172 8.29165 11.4514C8.18545 11.3878 8.09374 11.3054 8.02455 11.2115L0.81756 1.50438C0.521492 1.10558 0.642172 0.568059 1.08466 0.302189C1.24396 0.206823 1.43061 0.15625 1.62048 0.15625H16.0345C16.5671 0.15625 16.9999 0.54494 16.9999 1.02322C16.9999 1.19372 16.9436 1.36133 16.8374 1.50438L9.63039 11.2115Z" fill="#828282" />
    </svg>
)

export default SelectIcon