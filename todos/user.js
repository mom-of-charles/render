const body=document.body
const username=sessionStorage.getItem('username')
const div=document.createElement('div')
div.classList.add('userPanel')
const span=document.createElement('span')
if(username)
{
    span.innerText=username

}
else
{
    const a=document.createElement('a')
    a.innerText='登录'
    a.href='./login.html'
    span.appendChild(a)
}
