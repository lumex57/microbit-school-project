# SDGs 양성평등 학교 프로젝트
목표: 강제로 인신매매를 당하고 있는 사람들을 빠른 시간내에 구출해내기

# 필요한 거
- 허스키렌즈 
- AD키패드

# 동작원리
1. [봉고차 사진](https://file.carisyou.com/upload/2017/10/28/EDITOR_201710280438241570.jpg)으로 허스키렌즈 "Object Tracking"으로 학습 시키기
2. 허스키렌즈를 "Object Tracking" 모드로 초기화시키기
```ts
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
```
3. 무한반복으로 버튼이 눌리는지 감시(?) 눌리면 사이렌 울리기
```ts
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 10) {
        music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 300), music.PlaybackMode.UntilDone)
    }
})
```
4. 무한반복으로 허스키렌즈의 결과값을 실시간으로 받아오고 봉고차가 감지 되면 경보가 울림, 감지가 될 떄 까지 대기모드로 전환 
```ts
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 300), music.PlaybackMode.UntilDone)
        } else {
        	
        }
    }
})
```
<img width="1041" height="710" alt="image" src="https://github.com/user-attachments/assets/c134af99-d869-4472-b339-8ef2419d1032" />


# 프로젝트 쓰는 법
[메이크코드](https://makecode.microbit.org/) 들어가서 "가져오기" 누른 후, URL 가져오기 후
`https://github.com/lumex57/microbit-school-project/` 입력 후 가져오기
