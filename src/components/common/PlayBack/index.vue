<template>
    <div class="play" :class="isBg ? 'play_bg1' : 'play_bg'">
        <div class="slider-demo-block">
            <el-slider v-model="playBlackTime" :show-tooltip="false" :max="audioLength" @change="sliderChange"
                @input="sliderInput" />
        </div>
        <div class="song_info">
            <div class="flex" style="display:flex;align-items: center;">
                <div class="song_left">
                    <img :src="song.al?.picUrl || OpticalDisk" alt="">
                    <div class="song_lyric_info">
                        <div class="lyric_info">{{ song.name || '开源云音乐' }}</div>
                        <div class="lyric_cion">
                            <div class="lyric_cion_hover">
                                <el-icon size="16">
                                    <CirclePlus />
                                </el-icon>
                            </div>
                            <div class="lyric_cion_hover">
                                <el-icon size="16">
                                    <Download />
                                </el-icon>
                            </div>
                            <div class="lyric_cion_hover">
                                <el-icon size="16">
                                    <More />
                                </el-icon>
                            </div>
                            <div class="lyric_cion_hover">
                                <el-icon size="16">
                                    <ChatLineSquare />
                                </el-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="song_conter">
                    <div></div>
                    <div class="arrow_left" @click="previousSong">
                        <el-icon size="25">
                            <ArrowLeftBold />
                        </el-icon>
                    </div>
                    <div class="key_playBack" @click="playBackMusic">
                        <!-- 
                            InitiatePlayBacl:暂停
                            PausePlayBack:播放中
                         -->
                        <SvgIcon :name="isPause ? 'InitiatePlayBacl' : 'PausePlayBack'" :iconWidth="50" :iconHeight="50">
                        </SvgIcon>
                    </div>
                    <div class="arrow_right" @click="nextSong">
                        <el-icon size="25">
                            <ArrowRightBold />
                        </el-icon>
                    </div>
                    <div class="arrow_right">
                        <el-popover placement="top" trigger="hover">
                            <template #reference>
                                <el-icon size="25">
                                    <Bell />
                                </el-icon>
                            </template>
                            <el-slider style="margin-left: 50%; transform: translateX(-50%); margin-top: 20px;"
                                v-model="audioSlider" vertical :max="100" :min="0" size="small" height="100px"
                                :show-tooltip="false" @input="setAudioSlider" />
                            <div style="text-align: center;margin-bottom: 20px;">{{ audioSlider }}</div>
                        </el-popover>
                    </div>
                </div>
            </div>
            <div class="flex" style="display:flex;justify-content: end;">
                <div class="song_right">
                    <div>{{ convertToHMS(playBlackTime) }}/{{ convertToHMS(audioLength) }}</div>
                    <div class="song_list" @click="drawer = true">
                        <el-icon size="20">
                            <Operation /><span>{{ 1 }}</span>
                        </el-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 歌单列表 -->
    <el-drawer v-model="drawer" title="I am the title" :with-header="false">
        <span>Hi there!</span>
    </el-drawer>
</template>

<script setup lang='ts'>
import PlaylistModule from '@/components/common/PlaylistModule/index.vue'
import { OpticalDisk } from '@/assets/images/index'
import { usePlaySong } from '@/store/modules/playSong'
import { toRefs, ref, onMounted, watch } from 'vue'
import { convertToHMS } from '@/utils/index'
import { useThemeStore } from '@/store/modules/theme'

const isBg = ref<boolean>()
const musicThemeStore = useThemeStore()
const { previousSong, playBackMusic, nextSong, isPause, audioLength, playBlackTime, sliderChange, sliderInput, drawer, song, audioSlider, setAudioSlider } = toRefs(usePlaySong())

onMounted(() => {
    musicThemeStore.theme == 'dark' ? isBg.value = false : isBg.value = true;
})
watch(
    () => musicThemeStore.getTheme,
    (newVal: any) => {
        newVal == 'dark' ? isBg.value = false : isBg.value = true;
    }
);

</script>
<style scoped lang="scss">
.play_bg1 {
    background-color: #fff;
}

.play_bg {
    background-color: $base-dark !important;
}

.play {
    width: 100%;
    height: 70px;
    // background-color: #fff;

    .song_info {
        display: flex;
        padding: 0 20px;

        .flex {
            flex: 1;
            height: 50px;

            .song_left {
                display: flex;
                align-items: center;
                height: 45px;

                img {
                    width: 45px;
                    height: 45px;
                    border-radius: 6px;
                }

                .song_lyric_info {
                    display: flex;
                    flex-direction: column;
                    margin-left: 8px;
                    font-size: 12px;
                    height: 45px;
                    justify-content: space-around;

                    .lyric_cion {
                        display: flex;

                        .lyric_cion_hover {
                            margin-right: 6px;
                        }

                        .lyric_cion_hover:hover {
                            cursor: pointer;
                            color: $base-fontSize-color;
                        }
                    }
                }
            }

            .song_conter {
                display: flex;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;

                .key_playBack {
                    margin: 0 20px;
                }

                .arrow_left:hover {
                    cursor: pointer;
                    color: $base-fontSize-color;
                }

                .arrow_right:hover {
                    cursor: pointer;
                    color: $base-fontSize-color;

                }

                .arrow_right {
                    margin-right: 20px;
                }
            }

            .song_right {
                display: flex;
                align-items: center;
                font-size: 12px;
                justify-content: flex-end;

                div {
                    margin: 0 8px;
                }

                .song_list {
                    cursor: pointer;

                    span {
                        font-size: 13px;
                    }
                }

                .song_list:hover {
                    color: $base-fontSize-color;
                }
            }
        }
    }

    ::v-deep .el-slider {
        height: 10px !important;

    }

    ::v-deep .el-slider__button {
        width: 9px;
        height: 8px;
    }

    ::v-deep .el-slider__runway,
    ::v-deep .el-slider__bar {
        height: 2px !important;
        border-radius: 0 !important;
    }

    ::v-deep .el-slider__button-wrapper {
        opacity: 0;
        transition-property: opacity;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
        transition-duration: .15s;
        width: 10px;
        height: 10px;
        top: -10.5px;
    }




}
</style >
