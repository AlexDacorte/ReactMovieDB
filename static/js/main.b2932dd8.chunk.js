(this.webpackJsonpreact_movie_db_course=this.webpackJsonpreact_movie_db_course||[]).push([[0],{24:function(e,t,a){e.exports=a(48)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),o=a.n(r),m=a(5),i=a(7),l=(a(29),function(e){return c.a.createElement("div",{className:"rmdb-header"},c.a.createElement("div",{className:"rmdb-header-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{className:"rmdb-logo",src:"./images/reactMovie_logo.png",alt:"rmdb-logos"})),c.a.createElement("img",{className:"rmdb-tmdb-logo",src:"./images/tmdb_logo.png",alt:"tmdb-logo"})))}),s=a(18),u=a(10),d=a(11),h=a(13),v=a(12),g=a(14),b="https://api.themoviedb.org/3/",p="9217164ba8869597598531b6c2a72653",f="http://image.tmdb.org/t/p/",E=(a(35),function(e){return c.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0)\n            39%,rgba(0,0,0,0)\n            41%,rgba(0,0,0,0.65)\n            100%),\n            url('".concat(e.image,"'), #1c1c1c")}},c.a.createElement("div",{className:"rmdb-heroimage-content"},c.a.createElement("div",{className:"rmdb-heroimage-text"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.text))))}),N=a(6),k=a.n(N),_=(a(36),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.timeout=null,a.doSearch=function(e){a.setState({value:e.target.value}),clearTimeout(a.timeout),a.timeout=setTimeout((function(){a.props.callback(a.state.value)}),500)},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-searchbar"},c.a.createElement("div",{className:"rmdb-searchbar-content"},c.a.createElement(k.a,{className:"rmdb-fa-search",name:"search",size:"2x"}),c.a.createElement("input",{className:"rmdb-searchbar-input",type:"text",placeholder:"Search",onChange:this.doSearch,value:this.state.value})))}}]),t}(n.Component)),y=(a(37),function(e){return c.a.createElement("div",{className:"rmdb-grid"},e.header&&!e.loading?c.a.createElement("h1",null,e.header):null,console.log(e.header),c.a.createElement("div",{className:"rmdb-grid-content"},e.children.map((function(e,t){return c.a.createElement("div",{key:t,className:"rmdb-grid-element"},e)}))))}),j=(a(38),function(e){return c.a.createElement("div",{className:"rmdb-moviethumb"},e.clickable?c.a.createElement(m.b,{to:{pathname:"/".concat(e.movieId),movieName:"".concat(e.movieName)}},c.a.createElement("img",{src:e.image})):c.a.createElement("img",{src:e.image}))}),O=(a(39),function(e){return c.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:e.onClick},c.a.createElement("p",null,e.text))}),S=(a(40),function(e){return c.a.createElement("div",{className:"loader"})}),I=(a(41),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[],heroimage:null,loading:!1,currentPage:0,totalPages:0,searchTerm:""},a.searchItems=function(e){var t="";a.setState({movies:[],loading:!0,searchTerm:e}),t=""===e?"".concat(b,"movie/popular?api_key=").concat(p,"&language=en-US&page=1"):"".concat(b,"search/movie?api_key=").concat(p,"&language=en-US&query=").concat(e),a.fetchItems(t)},a.loadMOreItems=function(){var e="";a.setState({loading:!0}),e=""===a.state.searchTerm?"".concat(b,"movie/popular?api_key=").concat(p,"&language=en-US&page=").concat(a.state.currentPage+1):"".concat(b,"search/movie?api_key=").concat(p,"&language=en-US&query=").concat(a.state.searchTerm,"&page=").concat(a.state.currentPage+1),a.fetchItems(e)},a.fetchItems=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({movies:[].concat(Object(s.a)(a.state.movies),Object(s.a)(e.results)),heroimage:a.state.heroimage||e.results[0],loading:!1,currentPage:e.page,totalPages:e.total_pages})}))},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!0});var e="".concat(b,"movie/popular?api_key=").concat(p,"&language=en-US&page=1");this.fetchItems(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-home"},this.state.heroimage?c.a.createElement("div",null,c.a.createElement(E,{image:"".concat(f).concat("w1280").concat(this.state.heroimage.backdrop_path),title:this.state.heroimage.title,text:this.state.heroimage.overview})):null,c.a.createElement(_,{callback:this.searchItems}),c.a.createElement("div",{className:"rmdb-home-grid"},c.a.createElement(y,{header:this.state.searchTerm?"Search Result":"Popular movies",loading:this.state.loading},this.state.movies.map((function(e,t){return c.a.createElement(j,{key:t,clickable:!0,image:e.poster_path?"".concat(f).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})}))),this.state.loading?c.a.createElement(S,null):null,this.state.currentPage<=this.state.totalPages&&!this.state.loading?c.a.createElement(O,{text:"Load More",onClick:this.loadMOreItems}):null))}}]),t}(n.Component)),x=(a(42),function(e){return c.a.createElement("div",{className:"rmdb-navigation"},c.a.createElement("div",{className:"rmdb-navigation-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null,"/"),c.a.createElement("p",null,e.movie)))}),w=(a(43),function(e){return c.a.createElement("div",{className:"rmdb-movieinfo",style:{background:e.movie.backdrop_path?"url('".concat(f).concat("w1280").concat(e.movie.backdrop_path,"')"):"#000"}},c.a.createElement("div",{className:"rmdb-movieinfo-content"},c.a.createElement("div",{className:"rmdb-movieinfo-thumb"},c.a.createElement(j,{image:e.movie.poster_path?"".concat(f).concat("w500").concat(e.movie.poster_path):"./images/no_image.jpg",clickable:!1})),c.a.createElement("div",{className:"rmdb-movieinfo-text"},c.a.createElement("h1",null,e.movie.title),c.a.createElement("h3",null,"PLOT"),c.a.createElement("p",null,e.movie.overview),c.a.createElement("h3",null,"IMDB RATING"),c.a.createElement("div",{className:"rmdb-rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*e.movie.vote_average}),console.log(e.movie),c.a.createElement("p",{className:"rmdb-score"},e.movie.vote_average)),e.directors.length>1?c.a.createElement("h3",null,"DIRECTORS"):c.a.createElement("h3",null,"DIRECTOR"),e.directors.map((function(e,t){return c.a.createElement("p",{key:t,className:"rmdb-director"},e.name)}))),c.a.createElement(k.a,{className:"fa-film",name:"film",size:"5x"})))}),T=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},M=(a(44),function(e){return c.a.createElement("div",{className:"rmdb-movieinfobar"},c.a.createElement("div",{className:"rmdb-movieinfobar-content"},c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(k.a,{className:"fa-time",name:"clock-o",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"}," Running time :",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(e.time))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(k.a,{className:"fa-budget",name:"money",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget:",T(e.budget))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(k.a,{className:"fa-revenue/",name:"ticket",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"}," Revenue: ",T(e.revenue)))))}),P=(a(45),function(e){return c.a.createElement("div",{className:"rmdb-actor"},c.a.createElement("img",{src:e.actor.profile_path?"".concat(f).concat("w154").concat(e.actor.profile_path):"./images/no_image.jpg",alt:"actor_thumb"}),c.a.createElement("span",{className:"rmdb-actor-name"},e.actor.name),c.a.createElement("span",{className:"rmdb-actor-character"},e.actor.character))}),C=(a(46),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={movie:null,actors:null,directors:[],loading:!1},a.fetchItems=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){e.status_code?a.setState({loading:!1}):a.setState({movie:e},(function(){var e="".concat(b,"movie/").concat(a.props.match.params.movieId,"/credits?api_key=").concat(p);fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.crew.filter((function(e){return"Director"===e.job}));a.setState({actors:e.cast,directors:t,loading:!1})}))}))})).catch((function(e){return console.error("Error",e)}))},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!0});var e="".concat(b,"movie/").concat(this.props.match.params.movieId,"?api_key=").concat(p,"&language=en-US");this.fetchItems(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-movie"},this.state.movie?c.a.createElement("div",null,c.a.createElement(x,{movie:this.props.location.movieName}),c.a.createElement(w,{movie:this.state.movie,directors:this.state.directors}),c.a.createElement(M,{time:this.state.movie.runtime,budget:this.state.movie.budget,revenue:this.state.movie.revenue})):null,this.state.actors?c.a.createElement("div",{className:"rmdb-movie-grid"},c.a.createElement(y,{header:"Actors"},this.state.actors.map((function(e,t){return c.a.createElement(P,{key:t,actor:e})})))):null,this.state.actors&&!this.state.loading?null:c.a.createElement("h1",null,"No Movie Found!"),this.state.loading?c.a.createElement(S,null):null)}}]),t}(n.Component)),D=function(e){return c.a.createElement("div",null,c.a.createElement("h1",null,"Whoops. This page doesn't exist"))},R=function(e){return c.a.createElement(m.a,{basename:"/ReactMovieDB/"},c.a.createElement(c.a.Fragment,null,c.a.createElement(l,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",component:I,exact:!0}),c.a.createElement(i.a,{path:"/:movieId",component:C,exact:!0}),c.a.createElement(i.a,{component:D}))))};a(47);o.a.render(c.a.createElement(R,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b2932dd8.chunk.js.map