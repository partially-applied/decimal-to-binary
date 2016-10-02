dec-to-bin = (dec) ->

	bin = []

	while true

		if dec <= 1
			bin.push dec
			break


		rem = dec%2

		bin.push rem

		if rem is 0
			dec = dec/2
		else
			dec = (dec - 1)/2

	bin.reverse!

module.exports = dec-to-bin



