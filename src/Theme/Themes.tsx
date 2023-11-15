// // Update the type definition for your theme
// type MyThemeProps = {
//     dark: boolean;
//     colors: {
//       primary: string;
//       background: string;
//       card: string;
//       text: string;
//       border: string;
//       notification: string;
//       lightColor: string;
//       primaryColor: string;
//       darkColor: string;
//     };
//   };
// const MyTheme: MyThemeProps  = {
//     dark: false,
//     colors: {
//       primary: 'rgb(255, 45, 85)',
//       background: 'rgb(242, 242, 242)',
//       card: 'rgb(255, 255, 255)',
//       text: 'rgb(28, 28, 30)',
//       border: 'rgb(199, 199, 204)',
//       notification: 'rgb(255, 69, 58)',
//       lightColor: 'rgb(153, 208, 240)',
//       primaryColor: 'rgb(70, 167, 223)',
//       darkColor: 'rgb(7, 142, 219)',

//     },
//   };
// export default MyTheme;


const customTheme = {
  dark: false,
  colors: {
      primary: 'rgb(7, 142, 219)',
      background: 'rgb(255, 255, 255)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
      lightColor: 'rgb(153, 208, 240)',
      primaryColor: 'rgb(70, 167, 223)',
      darkColor: 'rgb(7, 142, 219)',
  },
};
export default customTheme;
export type Theme = typeof customTheme;