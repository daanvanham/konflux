/*
 *       __    Konflux Logo (version $DEV$ - $DATE$)
 *      /\_\
 *   /\/ / /   Copyright 2012-2013, Konfirm (Rogier Spieker)
 *   \  / /    Releases under the MIT license
 *    \/_/     More information: http://konfirm.net/konflux
 */
;(function(konflux){
	'use strict';

	var version = '$DEV$',
		design = {
			konflux: [
				//  remove the outline
				{
					lineWidth:[0],
					strokeStyle:['transparent']
				},

				//  'white' main color fill
				{
					line: [
						new konflux.point(72, 0),
						new konflux.point(45, 25),
						new konflux.point(0, 117),
						new konflux.point(39, 147),
						new konflux.point(70, 124),
						new konflux.point(97, 59),
						new konflux.point(121, 39)
					],
					fillStyle: ['rgb(242,242,242)'],
					fill:[]
				},

				//  blue main color fill
				{
					line:[
						new konflux.point(155, 30),
						new konflux.point(148, 50),
						new konflux.point(128, 33),
						new konflux.point(97, 59),
						new konflux.point(84, 90),
						new konflux.point(159, 150),
						new konflux.point(192, 127),
						new konflux.point(220, 35),
						new konflux.point(185, 7)
					],
					fillStyle: ['rgb(10,220,250)'],
					fill: []
				},

				//  the opaque darker overlays
				{
					line: [
						new konflux.point(72, 0),
						new konflux.point(29, 92),
						new konflux.point(70, 124),
						new konflux.point(39, 147),
						new konflux.point(0, 117),
						new konflux.point(45, 25)
					],
					fillStyle: ['rgba(0,0,0,.2)'],
					fill:[]
				},
				{
					line: [
						new konflux.point(185, 7),
						new konflux.point(165, 64),
						new konflux.point(148, 50),
						new konflux.point(155, 30)
					],
					fillStyle: ['rgba(0,0,0,.2)'],
					fill:[]
				},
				{
					line: [
						new konflux.point(115, 65),
						new konflux.point(192, 127),
						new konflux.point(159, 150),
						new konflux.point(84, 90),
						new konflux.point(97, 59),
						new konflux.point(128, 34)
					],
					fillStyle: ['rgba(0,0,0,.2)'],
					fill:[]
				},

				//  the dark base segment
				{
					line:[
						new konflux.point(45, 25),
						new konflux.point(0, 117),
						new konflux.point(39, 147),
						new konflux.point(54, 136),
						new konflux.point(14, 105),
						new konflux.point(59, 12)
					],
					fillStyle: ['rgb(50,50,50)'],
					fill: []
				},
				{
					line: [
						new konflux.point(97, 59),
						new konflux.point(84, 90),
						new konflux.point(159, 150),
						new konflux.point(175, 139),
						new konflux.point(99, 78),
						new konflux.point(112, 47)
					],
					fillStyle: ['rgb(50,50,50)'],
					fill:[]
				},
				{
					line: [
						new konflux.point(155, 30),
						new konflux.point(170, 18.4),
						new konflux.point(156, 56.8),
						new konflux.point(148, 50)
					],
					fillStyle: ['rgb(50,50,50)'],
					fill:[]
				}
			],
			konfirm: [
				//  remove the outline
				{
					lineWidth:[0],
					strokeStyle:['transparent']
				},
				//  the dark base segment
				{
					line:[
						new konflux.point(6, 88),
						new konflux.point(4, 70),
						new konflux.point(82, 132),
						new konflux.point(192, 44),
						new konflux.point(188, 62),
						new konflux.point(82, 150),
						new konflux.point(6, 88)
					],
					fillStyle:['rgb(25,25,25)'],
					fill:[]
				},
				//  the main color fill
				{
					line:[
						new konflux.point(154, 0),
						new konflux.point(82, 50),
						new konflux.point(42, 24),
						new konflux.point(0, 50),
						new konflux.point(4, 70),
						new konflux.point(82, 132),
						new konflux.point(192, 44),
						new konflux.point(198, 24),
						new konflux.point(154, 0)
					],
					fillStyle:[Math.round(Math.random()) === 1 ? 'rgb(10,220,250)' : 'rgb(200,250,10)'],
					fill:[]
				},
				//  the opaque darker overlay
				{
					globalAlpha:[.2],
					line:[
						new konflux.point(0, 50),
						new konflux.point(4, 70),
						new konflux.point(82, 132),
						new konflux.point(192, 44),
						new konflux.point(198, 24),
						new konflux.point(82, 112),
						new konflux.point(0, 50)
					],
					fillStyle:['rgb(0, 0, 0)'],
					fill:[]
				}
			]
		};


	/**
	 *  Logo object, creates the konflux logo on canvas
	 *  @module  logo
	 *  @note    available as konflux.logo / kx.logo
	 */
	function kxLogo()
	{
		var logo = this;

		/**
		 *  Get the name of the first design
		 *  @name    first
		 *  @type    function
		 *  @access  internal
		 *  @return  string name
		 */
		function first()
		{
			var p;
			for (p in design)
				return p;
			return false;
		}

		/**
		 *  Add a named design
		 *  @name    add
		 *  @type    function
		 *  @access  internal
		 *  @param   string name
		 *  @param   array  design instructions
		 *  @return  array  design instructions
		 */
		function add(name, config)
		{
			design[name] = config;
			return design[name];
		}

		/**
		 *  Get the width and height of given design
		 *  @name    size
		 *  @type    function
		 *  @access  internal
		 *  @param   string name
		 *  @return  array  dimensions
		 */
		function size(name)
		{
			var result = false,
				p, i, j;
			
			if (name in design)
			{
				result = new konflux.point();
				for (i = 0; i < design[name].length; ++i)
					for (p in design[name][i])
						for (j = 0; j < design[name][i][p].length; ++j)
							if (design[name][i][p][j] instanceof konflux.point)
							{
								result.x = Math.max(result.x, design[name][i][p][j].x);
								result.y = Math.max(result.y, design[name][i][p][j].y);
							}
			}
			return result;
		}

		/**
		 *  Remove a named design
		 *  @name    remove
		 *  @type    function
		 *  @access  internal
		 *  @param   string name
		 *  @return  array  design instructions (bool false if the design did not exist)
		 */
		function remove(name)
		{
			var result = false;
			if (name in design)
			{
				result = design[name];
				delete design[name];
			}
			return result;
		}

		/**
		 *  Render given design into an newly created canvas element
		 *  @name    append
		 *  @type    function
		 *  @access  internal
		 *  @param   string design (optional, default 'konflux', the first available design)
		 *  @return  kxCanvasContext
		 */
		function render(name)
		{
			var c, p, i;
			name = name || first();

			if (name in design)
			{
				c = size(name);
				c = konflux.canvas.create(c.x, c.y);
				for (i = 0; i < design[name].length; ++i)
					for (p in design[name][i])
						c[p].apply(null, design[name][i][p]);
				return c;
			}
			return false;
		}

		/**
		 *  Add a named design to the list of possible designs to render
		 *  @name    add
		 *  @type    method
		 *  @access  public
		 *  @param   string name
		 *  @param   array  design instructions
		 *  @return  array  design instructions
		 */
		logo.add = function(name, config)
		{
			return add(name, config);
		};

		/**
		 *  Remove a named design from the list of possible designs to render
		 *  @name    remove
		 *  @type    method
		 *  @access  public
		 *  @param   string name
		 *  @return  array  design instructions (bool false if the design did not exist)
		 */
		logo.remove = function(name)
		{
			return remove(name);
		};

		/**
		 *  Render given design into an newly created canvas element and append it to target
		 *  @name    append
		 *  @type    method
		 *  @access  public
		 *  @param   string design
		 *  @return  kxCanvasContext
		 */
		logo.append = function(target, design)
		{
			return render(design).append(target);
		};

		/**
		 *  Render given design as dataURL
		 *  @name    data
		 *  @type    method
		 *  @access  public
		 *  @param   string design
		 *  @return  string dataURL
		 */
		logo.data = function(name)
		{
			return render(name).data();
		};

		/**
		 *  Render given design into an newly created image DOMElement
		 *  @name    image
		 *  @type    method
		 *  @access  public
		 *  @param   string design
		 *  @return  DOMElement image
		 */
		logo.image = function(name)
		{
			var img = document.createElement('img');
			img.src = logo.data(name);
			return img;
		};
	}

	//  Append the logo module to konflux
	konflux.logo = kxLogo;

})(window.konflux);