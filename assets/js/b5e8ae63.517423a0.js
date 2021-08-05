(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[4338],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82164:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(74034),o=n(79973),i=(n(67294),n(3905)),r={id:"modal",title:"Opening a full-screen modal",sidebar_label:"Opening a full-screen modal"},l={unversionedId:"modal",id:"version-5.x/modal",isDocsHomePage:!1,title:"Opening a full-screen modal",description:"Modal shown on screen",source:"@site/versioned_docs/version-5.x/modal.md",sourceDirName:".",slug:"/modal",permalink:"/docs/5.x/modal",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/modal.md",version:"5.x",sidebar_label:"Opening a full-screen modal",frontMatter:{id:"modal",title:"Opening a full-screen modal",sidebar_label:"Opening a full-screen modal"},sidebar:"version-5.x/docs",previous:{title:"Navigation lifecycle",permalink:"/docs/5.x/navigation-lifecycle"},next:{title:"Next steps",permalink:"/docs/5.x/next-steps"}},s=[{value:"Creating a modal stack",id:"creating-a-modal-stack",children:[]},{value:"Summary",id:"summary",children:[]}],c={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Modal shown on screen",src:n(87305).Z})),(0,i.kt)("p",null,"A modal displays content that temporarily blocks interactions with the main view."),(0,i.kt)("p",null,"A modal is like a popup ","\u2014"," it's not part of your primary navigation flow ","\u2014"," it usually has a different transition, a different way to dismiss it, and is intended to focus on one particular piece of content or interaction."),(0,i.kt)("p",null,"The purpose of explaining this as part of the React Navigation fundamentals is not only because this is a common use case, but also because the implementation requires knowledge of ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/nesting-navigators"},"nesting navigators"),", which is an important part of React Navigation."),(0,i.kt)("h2",{id:"creating-a-modal-stack"},"Creating a modal stack"),(0,i.kt)("samp",{id:"full-screen-modal"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: \'center\', justifyContent: \'center\' }}>\n      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>\n      <Button\n        onPress={() => navigation.navigate(\'MyModal\')}\n        title="Open Modal"\n      />\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  return (\n    <View>\n      <Text>Details</Text>\n    </View>\n  );\n}\n\nfunction ModalScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: \'center\', justifyContent: \'center\' }}>\n      <Text style={{ fontSize: 30 }}>This is a modal!</Text>\n      <Button onPress={() => navigation.goBack()} title="Dismiss" />\n    </View>\n  );\n}\n\nconst MainStack = createStackNavigator();\nconst RootStack = createStackNavigator();\n\nfunction MainStackScreen() {\n  return (\n    <MainStack.Navigator>\n      <MainStack.Screen name="Home" component={HomeScreen} />\n      <MainStack.Screen name="Details" component={DetailsScreen} />\n    </MainStack.Navigator>\n  );\n}\n\nfunction RootStackScreen() {\n  return (\n    <RootStack.Navigator mode="modal">\n      <RootStack.Screen\n        name="Main"\n        component={MainStackScreen}\n        options={{ headerShown: false }}\n      />\n      <RootStack.Screen name="MyModal" component={ModalScreen} />\n    </RootStack.Navigator>\n  );\n}\n')),(0,i.kt)("p",null,"There are some important things to notice here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We are using our ",(0,i.kt)("inlineCode",{parentName:"p"},"MainStackScreen")," component as a screen inside ",(0,i.kt)("inlineCode",{parentName:"p"},"RootStackScreen"),"! By doing this, we are nesting a stack navigator inside of another stack navigator. In this case, this is useful for us because we want to use a different transition style for the modal. Since ",(0,i.kt)("inlineCode",{parentName:"p"},"RootStackScreen")," renders a stack navigator and has its own header, we also want to hide the header for this screen. In the future this will be important because for tab navigation, for example, each tab will likely have its own stack! Intuitively, this is what you expect: when you are on tab A and switch to tab B, you would like tab A to maintain its navigation state as you continue to explore tab B. Look at this diagram to visualize the structure of navigation in this example:\n",(0,i.kt)("img",{alt:"tree diagram",src:n(21051).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mode")," prop for stack navigator can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"card")," (default) or ",(0,i.kt)("inlineCode",{parentName:"p"},"modal"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"modal")," behavior slides the screen in from the bottom on iOS and allows the user to swipe down from the top to dismiss it. The ",(0,i.kt)("inlineCode",{parentName:"p"},"modal")," prop has no effect on Android because full-screen modals don't have any different transition behavior on the platform.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When we call ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate")," we don't have to specify anything except the route that we'd like to navigate to. There is no need to qualify which stack it belongs to (the arbitrarily named 'root' or the 'main' stack) ","\u2014"," React Navigation attempts to find the route on the closest navigator and then performs the action there. To visualize this, look again at the above tree diagram and imagine the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate")," action flowing up from ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeScreen")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"MainStack"),". We know that ",(0,i.kt)("inlineCode",{parentName:"p"},"MainStack")," can't handle the route ",(0,i.kt)("inlineCode",{parentName:"p"},"MyModal"),", so it then flows it up to ",(0,i.kt)("inlineCode",{parentName:"p"},"RootStack"),", which can handle that route, and so it does."))),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To change the type of transition on a stack navigator you can use the ",(0,i.kt)("inlineCode",{parentName:"li"},"mode")," prop. When set to ",(0,i.kt)("inlineCode",{parentName:"li"},"modal"),", all screens animate-in from bottom to top rather than right to left. This applies to that entire stack navigator, so to use right to left transitions on other screens, we add another navigation stack with the default configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"navigation.navigate")," traverses up the navigator tree to find a navigator that can handle the ",(0,i.kt)("inlineCode",{parentName:"li"},"navigate")," action.")))}p.isMDXComponent=!0},87305:function(e,t,n){"use strict";t.Z=n.p+"assets/images/modal-demo-c21e394139257ff16390d46aa6ba5bc2.gif"},21051:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tree-c522585f78ec7e8aeaa7d09d3568012a.png"}}]);