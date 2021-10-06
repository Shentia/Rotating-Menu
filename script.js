/**
 * @author Ahmadreza Shamimi
 * @email shentiaspirit@hotmail.com
 * @create date 2021-10-05 23:08:37
 * @modify date 2021-10-06 00:25:24
 * @desc [description]
 */

const open = document.getElementById("open");
const close = document.getElementById("close");

const container = document.querySelector(".container");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
});
close.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
