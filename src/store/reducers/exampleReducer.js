import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gloria: [
    { id: 'assets/images/gloria_sofa/1.jpeg' },
    { id: 'assets/images/gloria_sofa/2.jpeg' },
    { id: 'assets/images/gloria_sofa/3.jpeg' },
    { id: 'assets/images/gloria_sofa/4.jpeg' },
    { id: 'assets/images/gloria_sofa/5.jpeg' },
    { id: 'assets/images/gloria_sofa/6.jpeg' },
    { id: 'assets/images/gloria_sofa/7.jpeg' },
    { id: 'assets/images/gloria_sofa/8.jpeg' },
    { id: 'assets/images/gloria_sofa/9.jpeg' },
    { id: 'assets/images/gloria_sofa/10.jpeg' },
    { id: 'assets/images/gloria_sofa/11.jpeg' },
    { id: 'assets/images/gloria_sofa/12.jpeg' },
  ],
  afilli: [
    { id: 'assets/images/wood_sofa_team_afilli/A48A2588.jpeg' },
    { id: 'assets/images/wood_sofa_team_afilli/A48A2554.jpeg' },
    { id: 'assets/images/wood_sofa_team_afilli/A48A2552.jpeg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/A48A9877.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/A48A9874.jpg' },
    { id: 'assets/images/wood_sofa_team_afilli/A48A2557.jpeg' },
    { id: 'assets/images/wood_sofa_team_afilli/A48A2574.jpeg' },
    { id: 'assets/images/wood_sofa_team_afilli/A48A2574.jpeg' },
  ],
  han: [
    { id: 'assets/images/wood_sofa_team_han_tekstil/1.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/2.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/3.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/4.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/5.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/6.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/7.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/8.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/9.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/10.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/11.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/12.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/13.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/14.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/15.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/16.jpg' },
    { id: 'assets/images/wood_sofa_team_han_tekstil/17.jpg' },
  ],
  dortmund: [
    { id: "assets/images/dortmund/1.jpeg" },
    { id: "assets/images/dortmund/2.jpeg" },
    { id: "assets/images/dortmund/3.jpeg" },
    { id: "assets/images/dortmund/4.jpeg" },
    { id: "assets/images/dortmund/5.jpeg" },
    { id: "assets/images/dortmund/6.jpeg" },
    { id: "assets/images/dortmund/8.jpeg" },
    { id: "assets/images/dortmund/9.jpeg" },
    { id: "assets/images/dortmund_team/1.jpeg" },
    { id: "assets/images/dortmund_team/2.jpeg" },
    { id: "assets/images/dortmund_team/3.jpeg" },
    { id: "assets/images/dortmund_team/4.jpeg" },
    { id: "assets/images/dortmund_team/5.jpeg" },
    { id: "assets/images/dortmund_team/6.jpeg" },
    { id: "assets/images/dortmund_team/7.jpeg" },
    { id: "assets/images/dortmund_team/8.jpeg" },
    { id: "assets/images/dortmund_team/9.jpeg" },
    { id: "assets/images/dortmund_team/10.jpeg" },
    { id: "assets/images/dortmund_team/11.jpeg" },
    { id: "assets/images/dortmund_team/12.jpeg" },
    { id: "assets/images/dortmund_team/13.jpeg" },
    { id: "assets/images/dortmund_team/14.jpeg" },
  ],
  media: [
    { id: "assets/images/media/7.jpg" },
    { id: "assets/images/media/3.jpg" },
    { id: "assets/images/media/1.jpg" },
    { id: "assets/images/media/4.jpg" },
    { id: "assets/images/media/6.jpg" },
    { id: "assets/images/media/2.jpg" },
    { id: "assets/images/media/5.jpg" },
  ],
  gloria: [
    { id: "assets/images/gloria_sofa/1.jpeg" },
    { id: "assets/images/gloria_sofa/2.jpeg" },
    { id: "assets/images/gloria_sofa/3.jpeg" },
    { id: "assets/images/gloria_sofa/4.jpeg" },
    { id: "assets/images/gloria_sofa/5.jpeg" },
    { id: "assets/images/gloria_sofa/6.jpeg" },
    { id: "assets/images/gloria_sofa/7.jpeg" },
    { id: "assets/images/gloria_sofa/8.jpeg" },
    { id: "assets/images/gloria_sofa/9.jpeg" },
    { id: "assets/images/gloria_sofa/10.jpeg" },
    { id: "assets/images/gloria_sofa/11.jpeg" },
    { id: "assets/images/gloria_sofa/12.jpeg" },
    { id: "assets/images/gloria_sofa/13.jpeg" },
  ],
  countt: 0,
  header: 0,
  countState: null,
  states: null,
  imagePop: false,
}
const userManagament = createSlice({
  name: "userManagament",
  initialState,
  reducers: {
    count: (state, action) => {
      state.countt = action.payload
    },
    state: (state, action) => {
      state.states = action.payload
    },
    countState: (state, action) => {
      state.countState = action.payload
    },
    headers: (state, action) => {
      state.header = action.payload
    },
    ImagePop: (state, action) => {
      state.imagePop = !state.imagePop
    }
  }
})

export const { count, state, ImagePop, countState, headers } = userManagament.actions;
export default userManagament.reducer