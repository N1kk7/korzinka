// import { defineStore } from "pinia";

// interface ITooltip {
//     tooltipStatus: string,
//     tooltipMessage: string,
//     showTooltip: boolean
// }

// export const useTooltipStore = defineStore<'tooltip', ITooltip>('tooltip', {
//     state: (): ITooltip => ({
//             tooltipStatus: '',
//             tooltipMessage: '',
//             showTooltip: false
//     }),
//     getters: {
//     tooltipProps(state): ITooltip {
//         return {
//         tooltipStatus: state.tooltipStatus,
//         tooltipMessage: state.tooltipMessage,
//         showTooltip: state.showTooltip,
//         };
//     },
//     },
//     actions: {
//         showTooltip(props: ITooltip) {

//             this.tooltipStatus = props.tooltipStatus;
//             this.tooltipMessage = props.tooltipMessage;
//             this.showTooltip = props.showTooltip

//             console.log('open tooltip');
            
//         },
//         hideTooltip() {

//             this.tooltipStatus = '';
//             this.tooltipMessage = '';
//             this.showTooltip = false;

//             console.log('close tooltip');

//         }
//     }
// })