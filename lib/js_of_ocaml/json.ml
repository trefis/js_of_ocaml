(* Js_of_ocaml library
 * http://www.ocsigen.org/js_of_ocaml/
 * Copyright Grégoire Henry 2010.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, with linking exception;
 * either version 2.1 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
 *)

open Js
open! Import

class type json =
  object
    method parse : 'a. js_string t -> 'a meth

    method parse_ :
      'a 'b 'c 'd. js_string t -> ('b t, js_string t -> 'c -> 'd) meth_callback -> 'a meth

    method stringify : 'a. 'a -> js_string t meth

    (* Beware that this is only works when the function argument
       expects exactly two arguments (no curryfication is performed). *)
    method stringify_ : 'a 'b 'c 'd. 'a -> (js_string t -> 'c -> 'd) -> js_string t meth
  end

let json : json Js.t = Unsafe.global##._JSON

let unsafe_input s = json##parse s

let output obj = json##stringify obj
