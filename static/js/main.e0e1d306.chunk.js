(this["webpackJsonpquote-system"]=this["webpackJsonpquote-system"]||[]).push([[0],{42:function(n,t,e){"use strict";e.r(t);var i,c,a,r,s,d,o,l,j,x,b,p,h,O,u,m,f,g,v,w,y,k,S,E,C,L,F,z,N,V,I,P,A,q,D,J,Y,M,B,R,H,T,Q,G,K,U,W,X,Z,$,_,nn,tn,en,cn,an,rn,sn,dn,on,ln,jn,xn,bn,pn,hn,On,un,mn,fn,gn,vn=e(1),wn=e.n(vn),yn=e(24),kn=e.n(yn),Sn=e(10),En=e(0),Cn=Object(vn.createContext)({}),Ln=function(n){var t=n.children,e=Object(vn.useState)(!1),i=Object(Sn.a)(e,2),c=i[0],a=i[1],r=Object(vn.useCallback)((function(n){localStorage.setItem("menu-open",JSON.stringify(n)),a(n)}),[]);return Object(vn.useEffect)((function(){var n=localStorage.getItem("menu-open");a(!!n&&JSON.parse(n))}),[]),Object(En.jsx)(Cn.Provider,{value:{menuOpen:c,setMenuOpen:r},children:t})},Fn=function(){return wn.a.useContext(Cn)},zn=e(3),Nn=e(2),Vn=e(45),In=e(46),Pn=e(47),An=e(48),qn=e(49),Dn=e(50),Jn=e(51),Yn=e(52),Mn=e(53),Bn=e(54),Rn=e(55),Hn=e(56),Tn=e(57),Qn=Nn.c.header(i||(i=Object(zn.a)(["\n  position: sticky;\n  left: 0;\n  right: 0;\n  top: 0;\n  background-color: var(--white);\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);\n  max-width: 100vw;\n  z-index: 3;\n"]))),Gn=Nn.c.div(c||(c=Object(zn.a)(["\n  display: flex;\n  align-items: center;\n  margin: 13px 0;\n"]))),Kn=Nn.c.button(a||(a=Object(zn.a)(["\n  background-color: var(--background);\n  padding: 22.5px;\n  border-radius: 0 0 15px 0;\n  position: relative;\n  .open {\n    transform: scale(1);\n  }\n"]))),Un=Object(Nn.b)(r||(r=Object(zn.a)(["\n  width: 25px;\n  height: 25px;\n  fill: var(--primary);\n  cursor: pointer;\n  display: flex;\n"]))),Wn=Object(Nn.c)(Bn.a)(s||(s=Object(zn.a)(["\n  ","\n  transform: scale(0);\n  transition: transform 0.35s ease-in-out;\n"])),Un),Xn=Object(Nn.c)(In.a)(d||(d=Object(zn.a)(["\n  ","\n  transform: scale(0);\n  transition: transform 0.35s ease-in-out;\n  position: absolute;\n"])),Un),Zn=Nn.c.img(o||(o=Object(zn.a)(["\n  margin-left: 15px;\n  height: 45px;\n"]))),$n=Nn.c.div(l||(l=Object(zn.a)(["\n  display: none;\n  @media (min-width: 450px) {\n    display: flex;\n  }\n"]))),_n=Nn.c.div(j||(j=Object(zn.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]))),nt=Nn.c.div(x||(x=Object(zn.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n  width: 100%;\n\n  span {\n    font-size: 12px;\n    color: var(--blue-light);\n    text-transform: capitalize;\n  }\n  span:nth-child(2) {\n    font-size: 16px;\n    color: var(--primary);\n    text-transform: capitalize;\n  }\n  span:nth-child(3) {\n    font-size: 10px;\n    color: #326d8f;\n    text-transform: lowercase;\n  }\n"]))),tt=Nn.c.img(b||(b=Object(zn.a)(["\n  height: 45px;\n  width: 45px;\n  margin: 13px 15px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n"]))),et=e.p+"static/media/avatar-default.5038cd39.svg",it=function(){var n=Object(vn.useState)({}),t=Object(Sn.a)(n,2),e=t[0],i=t[1];Object(vn.useEffect)((function(){i({emailProfile:"teste@empresa.com",nameProfile:"Jo\xe3o da Silva",imgProfile:""})}),[]);var c=e.nameProfile,a=e.emailProfile,r=e.imgProfile;return Object(En.jsxs)(_n,{children:[Object(En.jsxs)(nt,{children:[Object(En.jsx)("span",{children:"Bem vindo"}),Object(En.jsx)("span",{children:c}),Object(En.jsx)("span",{children:a})]}),Object(En.jsx)(tt,{src:r||et})]})},ct=function(){var n=Fn(),t=n.menuOpen,e=n.setMenuOpen,i=Object(vn.useState)(""),c=Object(Sn.a)(i,2),a=c[0],r=c[1];Object(vn.useEffect)((function(){r("lakatos")}),[]);var s=Object(vn.useCallback)((function(){e(!t),document.body.classList.toggle("overflow-hidden",!t)}),[t]);return Object(En.jsxs)(Qn,{children:[Object(En.jsxs)(Gn,{children:[Object(En.jsxs)(Kn,{type:"button",onClick:s,children:[Object(En.jsx)(Xn,{className:t?"open":""}),Object(En.jsx)(Wn,{className:t?"":"open"})]}),Object(En.jsx)(Zn,{src:"images/".concat(a,".svg")})]}),Object(En.jsx)($n,{children:Object(En.jsx)(it,{})})]})},at=e(12),rt=e(6),st=Nn.c.div(p||(p=Object(zn.a)([""]))),dt=Object(Nn.b)(h||(h=Object(zn.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 10px;\n  align-items: center;\n"]))),ot=Nn.c.div(O||(O=Object(zn.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-around;\n  margin-top: 15px;\n"]))),lt=Nn.c.div(u||(u=Object(zn.a)(["\n  ","\n"])),dt),jt=Nn.c.div(m||(m=Object(zn.a)(["\n  ","\n"])),dt),xt=Nn.c.div(f||(f=Object(zn.a)(["\n  input[type='file'] {\n    display: none;\n  }\n\n  #file-upload:invalid ~ .import {\n    display: none;\n  }\n\n  #file-upload:valid ~ label {\n    display: none;\n  }\n\n  label {\n    width: 100%;\n    cursor: pointer;\n  }\n"]))),bt=Nn.c.button(g||(g=Object(zn.a)(["\n  cursor: pointer;\n  + button {\n  }\n"]))),pt=Object(Nn.b)(v||(v=Object(zn.a)(["\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n"]))),ht=Object(Nn.b)(w||(w=Object(zn.a)(["\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  padding: 4px;\n  border-radius: 4px;\n  background-color: var(--white);\n  :hover {\n    transform: scale(1.05);\n    transition: scale 0.3s;\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);\n  }\n"]))),Ot=Nn.c.div(y||(y=Object(zn.a)(["\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  padding: 4px;\n  border-radius: 4px;\n  background-color: var(--blue-light);\n\n  cursor: pointer;\n  :hover {\n    transform: scale(1.05);\n    transition: scale 0.3s;\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);\n  }\n  span {\n    color: var(--white);\n    margin-left: 5px;\n    text-transform: uppercase;\n  }\n"]))),ut=Object(Nn.c)(qn.a)(k||(k=Object(zn.a)(["\n  ","\n\n  path {\n    color: var(--white);\n  }\n"])),pt),mt=Object(Nn.c)(Rn.a)(S||(S=Object(zn.a)(["\n  ","\n  ","\n  margin-right: 5px;\n  path {\n    color: var(--green-csv);\n  }\n"])),pt,ht),ft=Object(Nn.c)(Hn.a)(E||(E=Object(zn.a)(["\n  ","\n  ","\n  margin-left: 5px;\n  path {\n    color: var(--black-print);\n  }\n"])),pt,ht),gt=Object(Nn.c)(Jn.a)(C||(C=Object(zn.a)(["\n  ","\n  path {\n    color: var(--status-default);\n  }\n"])),pt),vt=Nn.c.div(L||(L=Object(zn.a)(["\n  display: flex;\n  background-color: var(--white);\n  height: 32px;\n  justify-content: space-between;\n  width: 30%;\n  border-radius: 8px;\n  padding: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\n  align-items: center;\n\n  @media (max-width: 380px) {\n    width: unset;\n  }\n\n  svg {\n    margin: 5px 10px;\n  }\n\n  div {\n    @media (max-width: 380px) {\n      display: none;\n    }\n  }\n  span {\n    margin-right: 10px;\n    color: var(--status-default);\n    text-align: right;\n  }\n"]))),wt=Nn.c.div(F||(F=Object(zn.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin: 15px 0;\n  width: 100%;\n  max-width: 100vw;\n  div {\n    cursor: pointer;\n  }\n"]))),yt=Nn.c.div(z||(z=Object(zn.a)(["\n  width: 100%;\n  justify-content: space-between;\n  text-transform: uppercase;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: var(--blue-light);\n"]))),kt=Nn.c.div(N||(N=Object(zn.a)(["\n  display: flex;\n  width: 100%;\n"]))),St=Nn.c.div(V||(V=Object(zn.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 15px;\n  background-color: var(--white);\n  width: 100%;\n  border-radius: 8px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"]))),Et=Nn.c.div(I||(I=Object(zn.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 15px 25px;\n  align-items: center;\n  margin-top: 15px;\n  width: 100%;\n"]))),Ct=Object(Nn.c)(Tn.a)(P||(P=Object(zn.a)(["\n  width: 24px;\n  height: 24px;\n"]))),Lt=Nn.c.div(A||(A=Object(zn.a)(["\n  font-size: 8px;\n  color: var(--secondary);\n"]))),Ft=Nn.c.div(q||(q=Object(zn.a)(["\n  font-size: 14px;\n  color: var(--status-default);\n"]))),zt=Object(Nn.b)(D||(D=Object(zn.a)(["\n  width: 32px;\n  height: 32px;\n  display: none;\n  &.active {\n    display: block;\n  }\n"]))),Nt=Object(Nn.c)(An.a)(J||(J=Object(zn.a)(["\n  ","\n"])),zt),Vt=Object(Nn.c)(Pn.a)(Y||(Y=Object(zn.a)(["\n  ","\n"])),zt),It=Nn.c.div(M||(M=Object(zn.a)(["\n  display: flex;\n  background-color: var(--white);\n  border-radius: 8px;\n  width: 100%;\n  max-width: 100vw;\n  height: 110px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  margin-bottom: 15px;\n  @media (max-width: 380px) {\n    height: 180px;\n  }\n\n  :hover {\n    transform: scale(1.015);\n    transition: scale 0.3s;\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);\n  }\n"]))),Pt=Nn.c.div(B||(B=Object(zn.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  border-right: 1px solid var(--color-borders);\n  padding: 0 15px;\n"]))),At=function(n){var t=n.children;return Object(En.jsx)(Pt,{children:t})},qt=Nn.c.div(R||(R=Object(zn.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 15px 0;\n  width: 100%;\n"]))),Dt=function(n){var t=n.children;return Object(En.jsx)(qt,{children:t})},Jt=Nn.c.div(H||(H=Object(zn.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  border-left: 1px solid var(--color-borders);\n  padding: 0 12px;\n"]))),Yt=function(n){var t=n.children;return Object(En.jsx)(Jt,{children:t})},Mt=Nn.c.div(T||(T=Object(zn.a)(["\n  text-transform: uppercase;\n  display: flex;\n  padding: 0 12px;\n  @media (max-width: 380px) {\n    flex-direction: column;\n  }\n"]))),Bt=function(n){var t=n.children;return Object(En.jsx)(Mt,{children:t})},Rt=Nn.c.div(Q||(Q=Object(zn.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-left: 10px;\n  @media (max-width: 380px) {\n    margin-bottom: 5px;\n  }\n"]))),Ht=function(n){var t=n.children;return Object(En.jsx)(Rt,{children:t})},Tt=function(n){var t=n.children;return Object(En.jsx)(It,{children:t})},Qt=[{id:"0001",amount:10,product:"placa teste 1"},{id:"0002",amount:5,product:"placa teste 2"}],Gt=function(){var n=Object(rt.g)().quoteId,t=Object(vn.useState)([]),e=Object(Sn.a)(t,2),i=e[0],c=e[1],a=Object(vn.useState)(!0),r=Object(Sn.a)(a,2),s=r[0];r[1];return Object(vn.useEffect)((function(){c(Qt)}),[]),Object(En.jsxs)(st,{children:[Object(En.jsxs)(ot,{children:[Object(En.jsxs)(lt,{children:[Object(En.jsx)("span",{children:"Importar"}),Object(En.jsxs)(xt,{children:[Object(En.jsx)("input",{id:"file-upload",type:"file",required:!0}),Object(En.jsx)("label",{htmlFor:"file-upload",children:Object(En.jsx)(mt,{})}),Object(En.jsxs)(Ot,{className:"import",children:[Object(En.jsx)(ut,{}),Object(En.jsx)("span",{children:"Salvar"})]})]})]}),Object(En.jsxs)(vt,{children:[Object(En.jsx)(gt,{}),Object(En.jsx)(yt,{children:"cota\xe7\xe3o"}),Object(En.jsx)("span",{children:n})]}),Object(En.jsxs)(jt,{children:[Object(En.jsx)("span",{children:"Exportar"}),Object(En.jsxs)(kt,{children:[Object(En.jsx)(bt,{children:Object(En.jsx)(mt,{})}),Object(En.jsx)(bt,{children:Object(En.jsx)(ft,{})})]})]})]}),Object(En.jsx)(St,{children:Object(En.jsx)(Et,{children:"conteudo de cima"})}),Object(En.jsx)(wt,{children:i.map((function(n){return Object(En.jsxs)(Tt,{children:[Object(En.jsx)(At,{children:Object(En.jsx)(Ct,{})}),Object(En.jsxs)(Dt,{children:[Object(En.jsxs)(Bt,{children:[Object(En.jsxs)(Ht,{children:[Object(En.jsx)(Lt,{children:"c\xf3d"}),Object(En.jsx)(Ft,{children:n.id})]}),Object(En.jsxs)(Ht,{children:[Object(En.jsx)(Lt,{children:"Quantidade"}),Object(En.jsx)(Ft,{children:n.amount})]})]}),Object(En.jsx)(Bt,{children:Object(En.jsxs)(Ht,{children:[Object(En.jsx)(Lt,{children:"Produto"}),Object(En.jsx)(Ft,{children:n.product})]})})]}),Object(En.jsxs)(Yt,{children:[Object(En.jsx)(Nt,{className:s?"":"active"}),Object(En.jsx)(Vt,{className:s?"active":""})]})]},n.id)}))})]})},Kt=e(18),Ut=e(23),Wt=Nn.c.div(G||(G=Object(zn.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 100vw;\n  @media (min-width: 500px) {\n    max-width: 680px;\n  }\n\n  a {\n    width: 100%;\n    text-decoration: none;\n  }\n"]))),Xt=Nn.c.h2(K||(K=Object(zn.a)(["\n  display: flex;\n  color: var(--blue-light);\n  margin-top: 15px;\n"]))),Zt=Nn.c.div(U||(U=Object(zn.a)(["\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  @media (min-width: 500px) {\n    flex-direction: column;\n  }\n"]))),$t=Nn.c.div(W||(W=Object(zn.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n  @media (min-width: 500px) {\n    width: 70%;\n    & + div {\n      margin-top: 5px;\n    }\n  }\n"]))),_t=Nn.c.button(X||(X=Object(zn.a)(["\n  cursor: pointer;\n  width: 100%;\n  height: 26px;\n  margin: 5px 5px;\n  background-color: var(--gray-filters);\n  color: var(--filter-text);\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 400;\n  box-shadow: 0px 0.5px 3px rgba(0, 0, 0, 0.25);\n  :hover {\n    transform: scale(1.015);\n    transition: scale 0.3s;\n    font-weight: 500;\n    box-shadow: 0px 0.5px 3px rgba(0, 0, 0, 0.35);\n  }\n  &.active {\n    background-color: var(--blue-light);\n    color: var(--white);\n    :hover {\n      transform: scale(1.015);\n      transition: scale 0.3s;\n      font-weight: 500;\n      box-shadow: 0px 0.5px 3px rgba(0, 0, 0, 0.35);\n    }\n  }\n  @media (min-width: 500px) {\n    width: 20%;\n  }\n"]))),ne=Nn.c.div(Z||(Z=Object(zn.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin: 15px 0;\n  width: 100%;\n  max-width: 100vw;\n"]))),te=Object(Nn.c)(Jn.a)($||($=Object(zn.a)(["\n  width: 24px;\n  height: 24px;\n"]))),ee=Object(Nn.c)(Vn.a)(_||(_=Object(zn.a)(["\n  width: 24px;\n  height: 24px;\n"]))),ie=Nn.c.div(nn||(nn=Object(zn.a)(["\n  font-size: 8px;\n  color: var(--secondary);\n"]))),ce=Nn.c.div(tn||(tn=Object(zn.a)(["\n  font-size: 14px;\n  color: var(--status-default);\n  &.color0 {\n    color: var(--status-open);\n  }\n  &.color1 {\n    color: var(--status-finalize);\n  }\n  &.color2 {\n    color: var(--status-expired);\n  }\n"]))),ae={time:["Aberto","Vencido","Finalizado","Todos"],status:["\xdaltima","30 dias","60 dias","> 90 dias"]},re=[{id:"000134",idStatus:"0",status:"Aberto",dtEmission:"22/03/2020",dtLimit:"22/04/2020"},{id:"000133",idStatus:"1",status:"Finalizado",dtEmission:"22/01/2020",dtLimit:"22/02/2020"},{id:"000132",idStatus:"2",status:"Vencido",dtEmission:"22/01/2020",dtLimit:"22/02/2020"},{id:"000131",idStatus:"2",status:"Vencido",dtEmission:"22/01/2020",dtLimit:"22/02/2020"},{id:"000130",idStatus:"2",status:"Vencido",dtEmission:"22/01/2020",dtLimit:"22/02/2020"},{id:"000129",idStatus:"2",status:"Vencido",dtEmission:"22/01/2020",dtLimit:"22/02/2020"},{id:"000128",idStatus:"2",status:"Vencido",dtEmission:"22/01/2020",dtLimit:"22/02/2020"},{id:"000127",idStatus:"2",status:"Vencido",dtEmission:"22/01/2020",dtLimit:"22/02/2020"},{id:"000126",idStatus:"2",status:"Vencido",dtEmission:"22/01/2020",dtLimit:"22/02/2020"},{id:"000125",idStatus:"2",status:"Vencido",dtEmission:"22/01/2020",dtLimit:"22/02/2020"},{id:"000124",idStatus:"2",status:"Vencido",dtEmission:"22/01/2020",dtLimit:"22/02/2020"},{id:"000123",idStatus:"2",status:"Vencido",dtEmission:"22/01/2020",dtLimit:"22/02/2020"},{id:"000122",idStatus:"2",status:"Vencido",dtEmission:"22/01/2020",dtLimit:"22/02/2020"},{id:"000121",idStatus:"2",status:"Vencido",dtEmission:"22/01/2020",dtLimit:"22/02/2020"},{id:"000120",idStatus:"2",status:"Vencido",dtEmission:"22/01/2020",dtLimit:"22/02/2020"}],se=function(){var n=Object(vn.useState)([]),t=Object(Sn.a)(n,2),e=t[0],i=t[1],c=Object(vn.useState)({statusIndex:0,timeIndex:0}),a=Object(Sn.a)(c,2),r=a[0],s=a[1],d=Object(vn.useCallback)((function(n,t){s((function(e){return Object(Ut.a)(Object(Ut.a)({},e),{},Object(Kt.a)({},n,t))}))}),[]);return Object(vn.useEffect)((function(){i(re)}),[]),Object(En.jsxs)(Wt,{children:[Object(En.jsx)(Xt,{children:"Cota\xe7\xf5es"}),Object(En.jsxs)(Zt,{children:[Object(En.jsx)($t,{children:ae.time.map((function(n,t){return Object(En.jsx)(_t,{className:t===r.timeIndex?"active":"",onClick:function(){d("time",t)},children:n},n)}))}),Object(En.jsx)($t,{children:ae.status.map((function(n,t){return Object(En.jsx)(_t,{className:t===r.statusIndex?"active":"",onClick:function(){d("status",t)},children:n},n)}))})]}),Object(En.jsx)(ne,{children:e.map((function(n){return Object(En.jsx)(at.b,{to:"/quotesDetail/".concat(n.id),children:Object(En.jsxs)(Tt,{children:[Object(En.jsx)(At,{children:Object(En.jsx)(te,{})}),Object(En.jsxs)(Dt,{children:[Object(En.jsxs)(Bt,{children:[Object(En.jsxs)(Ht,{children:[Object(En.jsx)(ie,{children:"c\xf3d"}),Object(En.jsx)(ce,{children:n.id})]}),Object(En.jsxs)(Ht,{children:[Object(En.jsx)(ie,{children:"status"}),Object(En.jsx)(ce,{className:"color".concat(n.idStatus),children:n.status})]})]}),Object(En.jsxs)(Bt,{children:[Object(En.jsxs)(Ht,{children:[Object(En.jsx)(ie,{children:"Dt. Emiss\xe3o"}),Object(En.jsx)(ce,{children:n.dtEmission})]}),Object(En.jsxs)(Ht,{children:[Object(En.jsx)(ie,{children:"Dt. Limite"}),Object(En.jsx)(ce,{children:n.dtLimit})]})]})]}),Object(En.jsx)(Yt,{children:Object(En.jsx)(ee,{})})]})},n.id)}))})]})},de=Nn.c.div(en||(en=Object(zn.a)([""]))),oe=function(){return Object(En.jsx)(de,{children:Object(En.jsx)("h1",{children:"RegisterCompany"})})},le=Nn.c.div(cn||(cn=Object(zn.a)([""]))),je=function(){return Object(En.jsx)(le,{children:Object(En.jsx)("h1",{children:"Admin"})})},xe=Nn.c.div(an||(an=Object(zn.a)([""]))),be=function(){return Object(En.jsx)(xe,{children:Object(En.jsx)("h1",{children:"Logout"})})},pe=Nn.c.div(rn||(rn=Object(zn.a)([""]))),he=function(){return Object(En.jsx)(pe,{children:Object(En.jsx)("h1",{children:"Login"})})},Oe=function(n){var t=n.children,e=n.path;return Object(En.jsx)(rt.b,{path:e,children:Object(En.jsx)(En.Fragment,{children:t})})},ue=function(){return Object(En.jsxs)(rt.d,{children:[Object(En.jsx)(rt.b,{exact:!0,path:"/",children:Object(En.jsx)(se,{})}),Object(En.jsx)(rt.b,{path:"/quotesDetail/:quoteId",children:Object(En.jsx)(Gt,{})}),Object(En.jsx)(rt.b,{path:"/RegisterCompany",children:Object(En.jsx)(oe,{})}),Object(En.jsx)(Oe,{path:"/Admin",children:Object(En.jsx)(je,{})}),Object(En.jsx)(rt.b,{path:"/Logout",children:Object(En.jsx)(be,{})}),Object(En.jsx)(rt.b,{path:"/Login",children:Object(En.jsx)(he,{})}),Object(En.jsx)(rt.b,{path:"*",children:Object(En.jsx)("h1",{children:"P\xe1gina n\xe3o encontrada"})})]})},me=Nn.c.div(sn||(sn=Object(zn.a)(["\n  position: fixed;\n  top: 70px;\n  left: 0;\n  bottom: 0;\n  transform: translate(-150%);\n\n  &.menu-open {\n    width: 100%;\n    background-color: #0000009e;\n    transform: translate(0px);\n  }\n  .menu-open {\n    transform: translate(0px);\n  }\n"]))),fe=Nn.c.nav(dn||(dn=Object(zn.a)(["\n  display: flex;\n  flex-direction: column;\n  transition: all 0.5s ease-in-out;\n  transform: translate(-150%);\n  z-index: 2;\n  background-color: var(--white);\n  border-radius: 0 0 15px 0;\n  left: 0;\n  width: 270px;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);\n  height: 100%;\n  overflow-y: auto;\n\n  ::-webkit-scrollbar {\n    width: 5px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: var(--gray-light);\n    border-radius: 10px;\n  }\n\n  ul {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    list-style-type: none;\n\n    li:nth-child(1) {\n      margin-top: 30px;\n    }\n\n    li:last-child {\n      margin-top: 30px;\n    }\n  }\n"]))),ge=Nn.c.div(on||(on=Object(zn.a)(["\n  display: flex;\n  //padding: 20px 20px;\n  width: 100%;\n  max-width: 100%;\n  align-items: center;\n\n  a {\n    font-size: 14px;\n    display: flex;\n    text-decoration: none;\n    display: flex;\n    width: 100%;\n    max-width: 100%;\n    padding: 20px 10px 20px 15px;\n    align-items: center;\n    position: relative;\n\n    ::after {\n      content: '';\n      position: absolute;\n      right: 0px;\n      width: 2px;\n      height: 59px;\n      border: 1px solid transparent;\n      background-color: var(--primary);\n      transform: scaleY(0);\n    }\n\n    :hover {\n      background-color: var(--background);\n      transform: translateY(-1px);\n      transition: all 0.3s;\n      ::after {\n        transition: all 0.3s ease-in;\n        transform: scaleY(1);\n      }\n    }\n    &.active {\n      background-color: var(--background);\n      :hover {\n        transition: all 0.3s;\n        transform: translateY(-1px);\n      }\n    }\n    &.active::after {\n      transform: scaleY(1);\n      content: '';\n      position: absolute;\n      right: 0px;\n      width: 2px;\n      height: 59px;\n      border: 1px solid transparent;\n      background-color: var(--primary);\n    }\n  }\n\n  &.admin {\n    border-top: 1px solid var(--color-borders);\n    border-bottom: 1px solid var(--color-borders);\n  }\n"]))),ve=Nn.c.div(ln||(ln=Object(zn.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  span {\n    margin-left: 20px;\n    font-weight: 500 !important;\n    color: var(--gray);\n  }\n"]))),we=Object(Nn.b)(jn||(jn=Object(zn.a)(["\n  width: 20px;\n  height: 20px;\n  fill: var(--gray-light) !important;\n  path {\n    color: var(--gray-light) !important;\n  }\n"]))),ye=Object(Nn.c)(Dn.a)(xn||(xn=Object(zn.a)(["\n  ","\n"])),we),ke=Object(Nn.c)(Vn.a)(bn||(bn=Object(zn.a)(["\n  ","\n"])),we),Se=Object(Nn.c)(Jn.a)(pn||(pn=Object(zn.a)(["\n  ","\n"])),we),Ee=Object(Nn.c)(Yn.a)(hn||(hn=Object(zn.a)(["\n  ","\n"])),we),Ce=Object(Nn.c)(Mn.a)(On||(On=Object(zn.a)(["\n  ","\n"])),we),Le=Nn.c.div(un||(un=Object(zn.a)(["\n  display: none;\n  padding: 20px;\n  @media (max-width: 450px) {\n    display: flex;\n  }\n"]))),Fe=function(){var n=Fn(),t=n.menuOpen,e=n.setMenuOpen,i=Object(vn.useCallback)((function(n){document.body.classList.toggle("overflow-hidden",!t),e(!t)}),[t]);return Object(En.jsx)(me,{className:t?"menu-open":"",onClick:i,children:Object(En.jsxs)(fe,{className:t?"menu-open":"",children:[Object(En.jsxs)("ul",{children:[Object(En.jsx)("li",{children:Object(En.jsx)(ge,{children:Object(En.jsxs)(at.c,{exact:!0,to:"/RegisterCompany",activeClassName:"active",onClick:i,children:[Object(En.jsxs)(ve,{children:[Object(En.jsx)(ye,{}),Object(En.jsx)("span",{children:"Cadastro Empresa"})]}),Object(En.jsx)("div",{children:Object(En.jsx)(ke,{})})]})})}),Object(En.jsx)("li",{children:Object(En.jsx)(ge,{children:Object(En.jsxs)(at.c,{exact:!0,to:"/",activeClassName:"active",onClick:i,children:[Object(En.jsxs)(ve,{children:[Object(En.jsx)(Se,{}),Object(En.jsx)("span",{children:"Cota\xe7\xf5es"})]}),Object(En.jsx)(ke,{})]})})}),Object(En.jsx)("li",{children:Object(En.jsx)(ge,{className:"admin",children:Object(En.jsxs)(at.c,{exact:!0,to:"/Admin",activeClassName:"active",onClick:i,children:[Object(En.jsxs)(ve,{children:[Object(En.jsx)(Ee,{}),Object(En.jsx)("span",{children:"Administrativo"})]}),Object(En.jsx)(ke,{})]})})}),Object(En.jsx)("li",{children:Object(En.jsx)(ge,{children:Object(En.jsxs)(at.c,{exact:!0,to:"/Logout",activeClassName:"active",onClick:i,children:[Object(En.jsxs)(ve,{children:[Object(En.jsx)(Ce,{}),Object(En.jsx)("span",{children:"Sair"})]}),Object(En.jsx)(ke,{})]})})})]}),Object(En.jsx)(Le,{children:Object(En.jsx)(it,{})})]})})},ze=Nn.c.div(mn||(mn=Object(zn.a)(["\n  position: relative;\n  width: 100%;\n"]))),Ne=Nn.c.div(fn||(fn=Object(zn.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n\n  > div {\n    margin: 0 35px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    max-width: 100vw;\n    @media (min-width: 500px) {\n      max-width: 680px;\n    }\n  }\n"]))),Ve=function(){return Object(En.jsx)(at.a,{children:Object(En.jsxs)(ze,{children:[Object(En.jsx)(Fe,{}),Object(En.jsx)(Ne,{children:Object(En.jsx)(ue,{})})]})})},Ie=Object(Nn.a)(gn||(gn=Object(zn.a)(["\n  * {\n    margin:0;\n    padding: 0;\n    box-sizing: 0;\n    color: var(--white)\n  }\n\n  html, body, #root {\n    max-height: 100vh;\n    max-width: 100vw;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n  }\n\n  .overflow-hidden > #root{\n      overflow: hidden!important;\n  }\n\n  #root{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    /* width */\n    ::-webkit-scrollbar {\n      width: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n      background: #f1f1f1;\n      border-radius: 10px;\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n      background: #888;\n      border-radius: 10px;\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n      background: #555;\n    }\n  }\n\n  *, input, button {\n    border: 0;\n    outline:0;\n    background: none;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 600;\n    color: var(--primary)\n  }\n  html {\n    background: var(--background);\n  }\n  :root {\n    --background: #F5F6FA;\n    --primary: #003859;\n    --secondary: #37393E;\n    --white: #FFFFFF;\n    --gray-filters: #e5e6e9;\n    --blue-light:#326D8F;\n    --gray-light: #8C91A9;\n    --gray: #58595B;\n    --color-borders: #f5f6fa;\n    --status-default: #6a6c72;\n    --status-open: #326D8F;\n    --status-finalize: #3F8F32;\n    --status-expired: #8F3232;\n    --filter-text: #4F4F4F;\n    --green-csv: #00A976;\n    --black-print: #000;\n  }\n"]))),Pe=function(){return Object(En.jsxs)(En.Fragment,{children:[Object(En.jsx)(ct,{}),Object(En.jsx)(Ve,{}),Object(En.jsx)(Ie,{})]})};kn.a.render(Object(En.jsx)(wn.a.StrictMode,{children:Object(En.jsx)(Ln,{children:Object(En.jsx)(Pe,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e0e1d306.chunk.js.map