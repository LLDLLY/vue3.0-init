export function $log(msg: any, lable?: string,): void {
  lable ? console.log(lable, msg) : console.log(msg);
}