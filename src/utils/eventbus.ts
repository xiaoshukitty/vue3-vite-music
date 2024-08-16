class EventBus {
  //用 set 可以自动去重
  private events: Record<string, Set<(...args: any[]) => void>> = {};

  //订阅
  on(event: string, callback: () => void) {
    // if (!this.events[event]) {
    //   this.events[event] = new Set();
    // }
    // this.events[event].add(callback);

    //简约写法
    (this.events[event] ??= new Set()).add(callback);
  }

  //触发
  emit(event: string, ...args: any[]) {
    this.events[event]?.forEach((callback) => callback(...args));
  }

  //取消
  off(event: string, callback: (...args: any[]) => void) {
    // set 删除方法 delete
    this.events[event]?.delete(callback);
  }

  //调用一次
  once(event: string, callback: (...args: any[]) => void) {
    const handler = (...args: any[]) => {
      callback(...args);
      this.off(event, handler);
    };

    this.on(event, handler);
  }
}

export const bus = new EventBus();
