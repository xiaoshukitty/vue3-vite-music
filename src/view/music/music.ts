import { ref } from "vue";

export function useMusicMenu() {
  const menus: MusicMenu[] = [
    {
      label: "精选",
      name: "Winnow",
    },
    {
      label: "排行",
      name: "Ranking",
    },
    {
      label: "歌手",
      name: "Singer",
    },
    {
      label: "分类歌单",
      name: "ClassifiedPlaylist",
    },
  ];

  const currentMenu = ref("Winnow");

  return {
    menus,
    currentMenu,
  };
}

interface MusicMenu {
  label: string;
  name: string;
}
