start = 0 -- jika kamu fc, ganti ini ke asalnya misal kamu fc di 23/80, ganti jadi 23. distart. kalau mulai dari awal ubah 0

stopsb = 80 -- total sb.. 1 jam = 40 (Kelipatan 40 untuk perjam)

text = "`9[MIN 10DL - MAXXX] `0>>> ASEAA <<< `2#NeedHoster #BUYSB"

autoexit = 0 -- kasih 0 jika sudah pakai exit world 

exitworld = "KDLX" -- nama world jika selesai sb

NameLog = "fayerx" --nama log file kalian

lonely = 0 -- 1 untuk nyalakan agar mengurangi lag, 0 matikan

WorldtoSB = "ASEAA"


-- DONT TOUCH NIGGA
NameWorld = WorldtoSB
local totalGems = 0
GotBlocked = 0
gemsUsed = 0


function FormatTime(time)
	return os.date("%H:%M", time)
end

local scriptStartTime = os.time()
SendPacket(2, "action|input\ntext|`w[`bFayerX`w] `9Script Runned! (lol)")
Sleep(1100)
SendPacket(2, "action|input\ntext|`^Current World `9SB:`b "..WorldtoSB)
Sleep(1100)
SendPacket(2, "action|input\ntext|`w[`bFayerX`w] `0Start `9Time`w: `2" .. FormatTime(scriptStartTime))
Sleep(1500)

function Tolay(x)
	local var = {}
	var.v0 = "OnTextOverlay"
	var.v1 = x
	var.netid = GetLocal().NetID
	SendVariant(var)
end

function ngewe(varlist, packet)
	if varlist[0]:find("OnSDBroadcast") then
		Tolay("`w[`bFayer`w] `cSuccess Blocked SDB")
		return true
	elseif varlist[0]:find("OnConsoleMessage") then
		if varlist[2]:find("sent.") then
			gemsUsed = varlist[2]:match("Used%s+`$(%d+)%s+Gems")
			totalGems = totalGems + gemsUsed
delay = false
return true
end
if v.v1 == "OnConsoleMessage" then
if v.v2:find("pending one.") then
gemsUsed = GotBlocked
delay = true
    end
		end
	end
	return false
end
AddCallback("ngentot", "OnVarlist", ngewe)

SendPacket(2,"action|dialog_return\ndialog_name|cheats\ncheck_lonely|" .. lonely)

for esbe = start, stopsb - 1 do
	if GetWorldName() ~= NameWorld then
		SendPacket(3, "action|join_request\nname|"..NameWorld.."\ninvitedWorld|0")
		Sleep(2300)
	end
	SendPacket(2, "action|input\ntext|/sb " .. text .. " `0[Residents`4SB`0]")
	Sleep(1100)

	remainingSBs = stopsb - (esbe + 1)
	local remainingTime = remainingSBs * 1.5 * 60
	local endTime = os.time() + remainingTime
	local formattedEndTime = os.date("%H:%M", endTime)
	SendPacket(2, "action|input\n|text|`b[`4By `9Doctorr`b] `9TOTAL SB`w: `b[ `2" .. (esbe + 1) .. " `w/ `4" .. stopsb .. " `b] `w/ `9Sisa `2SB`w: `b[ `c" .. remainingSBs .." `b] `w/ `9End Time: `4 " .. formattedEndTime)
Sleep(1100)

if (delay == true) then
SendPacket(2, "action|input\ntext| `0Sb Got Blocked")
Sleep(1100)
SendPacket(2, "action|input\ntext| `0Used `4Gems`b: `b" ..GotBlocked .. " `9(gems)")
elseif (delay == false) then
SendPacket(2, "action|input\ntext| `0Used `4Gems `b:`9 " .. gemsUsed .. " `b(gems)")
Sleep(1100)
end

WriteToLogFile("====================")
WriteToLogFile("Time at: " .. os.date("%H:%M:%S"))
WriteToLogFile("» Used Gems: " .. gemsUsed)
WriteToLogFile("» Remaining SB: " .. (esbe + 1) .. " / " .. stopsb)
WriteToLogFile("» Sisa SB: " .. remainingSBs)
WriteToLogFile("Total Used Gems: " .. totalGems)
	if esbe ~= stopsb - 1 then
		Sleep(90100)
	end
end

Sleep(3000)
SendPacket(2, "action|input\ntext| `9Thank's Warping To "..exitworld)
Sleep(2000)
SendPacket(2, "action|input\n|text|/wp "..exitworld)
Sleep(2150)
SendPacket(2,"action|dialog_return\ndialog_name|cheats\ncheck_lonely|".. lonely)
Sleep(2000)

if autoexit == 1 then
	SendPacket(3, "action|join_request\n|name|" .. exitworld .. "")
end
