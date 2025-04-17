<section>
	<h2>Eventify</h2>
	<h3>Timeframe: sept 2024-Apr 2025</h3>
	<p>Eventify is an events booking platform written as part of my capstone project</p>
	<p>
		It focuses on the unfilled niche of authentic experiential events driven by the local community
	</p>
	<p>
		Written in Bun, SvelteKit and PostgreSQL, this app is ready to scale all the way to the moon
	</p>
	<p>
		I was responsible for nearly all the technical parts, the writing parts and the project
		management
	</p>
	<p>Below you can find links to the presentation slides and the source code</p>
	<a href="https://eventify-slides.vercel.app">Slides</a>
	<a href="https://github.com/nomadicafrican/Eventify">Source Code</a>
	<a href="https://github.com/biehla/eventify">Go Prototype</a>
</section>

<section>
	<h2>Authenticity and Manipulation in Digital Photography</h2>
	<h3>Timeframe: Nov 2024</h3>
	<p>
		A small website/article I wrote about finding the truth in an era of misinformation,
		specifically focused on how it pertains to digital photography
	</p>
	<p>In this article I write about various photography and photojournalism philosophies</p>
	<p>I even touch on modern photo-forensics techniques</p>
	<p>Read to find out more!</p>
	<a href="https://biehla.github.io/PhotoWeek12/">Article</a>
	<a href="https://github.com/biehla/PhotoWeek12">Source Code</a>
</section>

<section>
	<h2>Apple Music Preview Installer</h2>
	<h3>Timeframe: Feb 2023</h3>
	<p>
		A small script that handles installing the Apple Music Preview UWP Windows app onto the
		(officially unsupported) Windows 10
	</p>
	<p>Handles a number of operations:</p>
	<ul>
		<li>Scrapes and downloads package file from store</li>
		<li>Unpackages and modifies metadata</li>
		<li>Installs onto system</li>
	</ul>
	<a href="https://github.com/biehla/AppleMusicPreviewInstaller">Source Code</a>
</section>

<section>
	<h2>Python Library Manager</h2>
	<h3>Timeline: Apr 2023</h3>
	<p>A small python-based TUI/GUI application to manage a library of books</p>
	<p>Easy to use interface that works on a terminal as well as on the desktop</p>
	<a href="https://github.com/biehla/PythonLibraryManager/commits/main/">Source Code</a>
</section>

<section>
	<h2>TicTacToe CLI Game with Minimax AI</h2>
	<h3>Timeframe: March 2023</h3>
	<p>Implements the minimax algorithm for use in singleplayer sessions</p>
	<p>Also includes an <emph>easy</emph> mode AI</p>
	<p>Supports hotseat gamemode as well</p>
	<a href="https://github.com/biehla/TicTacToe">Source Code</a>
</section>

<section>
	<h2>Github Pages Website</h2>
	<h3>Timeframe: March 2018</h3>
	<p>A small, fast, clean website built in web standards with no dependencies</p>
	<p>My first foray into Javascript programming on the web</p>
	<p>Features:</p>
	<ul>
		<li>Font size adjustment</li>
		<li>
			Light/Dark mode switcher (implemented before this was standardised, so it does not ask the
			browser for OS theme)
		</li>
		<li>"Secret" party mode</li>
		<li>Synchronises page events to a beat</li>
		<li>Manages colors so that they are never too unreadable</li>
	</ul>
	<a href="https://biehla.github.io/">Website</a>
	<a href="https://github.com/biehla/biehla.github.io">Source Code</a>
</section>

<section>
	<h2>TruckStop</h2>
	<h3>Timeframe: Jan 2019</h3>
	<p>A project which was created as part of McMaster's 2019 DeltaHacks hackathon</p>
	<p>A clean, scalable, and realistic solution towards reducing cargo theft</p>
	<a href="https://github.com/biehla/TruckStop">Source Code and More Details</a>
</section>

<section>
	<h2>B-Mode Iambic Morse Code Keyer</h2>
	<h3>Timeframe: Sept 2018</h3>
	<p>
		Portable keyer that accepts input from iambic pedals (pedals with two buttons on them, one for
		dits, and one for dahs)
	</p>
	<p>Converts incoming button signals into sendable morse code</p>
	<p>Supports adjustment of display, tone frequency, keying speed, and farnsworth speed</p>
	<p>
		Farnsworth speed is used by learners of morse code to increase legibility. It consists of
		increasing the timing in between dits and dahs, as well as the timing between words. This makes
		it easier to understand while not warping the lengths of characters, allowing the learner to
		understand what the characters and words will sound like on the air.
	</p>
	<a href="https://github.com/biehla/Keyer">Source Code</a>
</section>

<style>
	@reference "../../app.css";

	section {
		@apply pb-15;
	}

	h2 {
		@apply pb-2 text-4xl;
	}

	h3 {
		@apply py-2 text-3xl;
	}

	p {
		@apply py-0.25;
	}

	a {
		display: block;
		@apply text-blue-800;
	}

	a:visited {
		@apply text-purple-800;
	}

	ul {
		@apply list-disc pl-9;
	}
</style>
